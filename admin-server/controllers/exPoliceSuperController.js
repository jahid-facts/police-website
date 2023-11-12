
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getExSp = async (req, res) => {
  const officer = await prisma.Ex_Police_Super.findMany({
    select: {
      id:true,
      name : true,
      image : true,
      title : true,
      from_date : true,
      to_date : true,
    }
  });
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

exports.getSingleExSp = async (req, res) => {
  const officer = await prisma.Ex_Police_Super.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(officer)
}

exports.saveExSp = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { name, title, from_date, to_date } = req.body;
    const image = req?.file?.filename ? req?.file?.filename : null;

    try {
      const officer = await prisma.Ex_Police_Super.create({
        data: {
          name,
          image,
          title,
          from_date,
          to_date
        },
      });
      res.json(officer);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
      console.log(error)
    }
  });
};


exports.updateExSp = async (req, res) => {
  const officerId = Number(req.params.id);
  try {
    const existingExSp = await prisma.Ex_Police_Super.findUnique({ where: { id: officerId } });

    if (!existingExSp) {
      return res.status(404).json({ error: 'ExSp not found' });
    }
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      const { name, title, from_date, to_date } = req.body;

      const previousImagePath = path.join('public', 'uploads', existingExSp.image);
      if (newImage) {
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }

      // Update officer with new image
      const updatedExSp = await prisma.Ex_Police_Super.update({
        where: { id: officerId },
        data: {
          image: newImage ? newImage.filename : existingExSp.image,
          name,
          title,
          from_date,
          to_date,
        },
      });
      res.json(updatedExSp);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteExSp = async (req, res) => {
  const officer = await prisma.Ex_Police_Super.delete({
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
