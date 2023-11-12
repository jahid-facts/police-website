
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getOfficers = async (req, res) => {
  const officer = await prisma.Officers.findMany();
  res.json(officer)

}

// image upload
var Storage = multer.diskStorage({
  destination: function (req, file, cv) {
    cv(null, "./public/uploads/");

  },
  filename: function (req, file, cv) {
    cv(null, Date.now() + "_" + file.originalname);
  }
});

const upload = multer({
  storage: Storage,

}).single("image");

exports.getSingleOfficers = async (req, res) => {
  const officer = await prisma.Officers.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(officer)
}

exports.saveOfficers = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { name, designation, mobile, phone, bcs_batch } = req.body;
    const image = req?.file?.filename ? req?.file?.filename : null;

    try {
      const officer = await prisma.Officers.create({
        data: {
          name,
          designation,
          mobile,
          phone,
          image,
          bcs_batch
        },
      });
      res.json(officer);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
      console.log(error)
    }
  });
};


exports.updateOfficers = async (req, res) => {
  const officerId = Number(req.params.id);
  try {
    const existingOfficers = await prisma.Officers.findUnique({ where: { id: officerId } });

    if (!existingOfficers) {
      return res.status(404).json({ error: 'Officers not found' });
    }
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      const { name, designation, mobile, phone, bcs_batch } = req.body;

      const previousImagePath = path.join('public', 'uploads', existingOfficers.image);
      if (newImage) {
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }

      // Update officer with new image
      const updatedOfficers = await prisma.Officers.update({
        where: { id: officerId },
        data: {
          image: newImage ? newImage.filename : existingOfficers.image,
          name,
          designation,
          mobile,
          phone,
          bcs_batch
        },
      });
      res.json(updatedOfficers);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteOfficers = async (req, res) => {
  const officer = await prisma.Officers.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  if (officer.image) {
    const previousImagePath = path.join('public', 'uploads', officer.image);
    try {
      fs.unlinkSync(previousImagePath);
    } catch (error) {
      console.log(error)
    }
  }
  res.json(officer)
}
