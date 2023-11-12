
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getPoliceSuper = async (req, res) => {
  const slide = await prisma.sp.findMany({
    orderBy: {
      index: "asc"
    }
  });
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

exports.getSinglePoliceSuper = async (req, res) => {
  const slide = await prisma.sp.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.savePoliceSuper = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { name, designation, title, index, content } = req.body;
    const image = req.file ? req?.file?.filename : null;

    try {
      const slide = await prisma.sp.create({
        data: {
          name, title,
          designation,
          content,
          image,
          index:Number(index)
        },
      });
      res.json(slide);
    } catch (error) {
      
      res.status(500).json({ error: error.message });
    }
  });
};


exports.updatePoliceSuper = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingPoliceSuper = await prisma.sp.findUnique({ where: { id: slideId } });

    if (!existingPoliceSuper) {
      return res.status(404).json({ error: 'PoliceSuper not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      if (newImage && existingPoliceSuper.image) {
        const previousImagePath = path.join('public', 'uploads', existingPoliceSuper.image);
        fs.unlinkSync(previousImagePath);
      }
      const { name, designation, title,index, content } = req.body;

      // Update slide with new image
      const updatedPoliceSuper = await prisma.sp.update({
        where: { id: slideId },
        data: {
          name, designation, title, content,
          index:Number(index),
          image: newImage ? newImage.filename : existingPoliceSuper.image,
        },
      });
      res.json(updatedPoliceSuper);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePoliceSuper = async (req, res) => {
  const slide = await prisma.sp.delete({
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
