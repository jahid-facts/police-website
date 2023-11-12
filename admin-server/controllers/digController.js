
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getDig = async (req, res) => {
  const slide = await prisma.dig.findFirst({});
  res.json(slide)

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

exports.getSingleDig = async (req, res) => {
  const slide = await prisma.dig.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.saveDig = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { name, designation, content } = req.body;
    const image = req.file ? req?.file?.filename : null;

    try {
      const slide = await prisma.dig.create({
        data: {
          name,
          designation,
          content,
          image,
        },
      });
      res.json(slide);
    } catch (error) {
      
      res.status(500).json({ error: error.message });
    }
  });
};


exports.updateDig = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingDig = await prisma.dig.findUnique({ where: { id: slideId } });

    if (!existingDig) {
      return res.status(404).json({ error: 'Dig not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      if (newImage && existingDig.image) {
        const previousImagePath = path.join('public', 'uploads', existingDig.image);
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }
      const { name, designation, content } = req.body;

      // Update slide with new image
      const updatedDig = await prisma.dig.update({
        where: { id: slideId },
        data: {
          name, designation, content,
          image: newImage ? newImage.filename : existingDig.image,
        },
      });
      res.json(updatedDig);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteDig = async (req, res) => {
  const slide = await prisma.dig.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  if (slide.image) {
    const previousImagePath = path.join('public', 'uploads', slide.image);
    if (previousImagePath) {
      fs.unlinkSync(previousImagePath);
    }
  }
  res.json(slide)
}
