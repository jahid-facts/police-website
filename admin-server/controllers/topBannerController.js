
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getBanner = async (req, res) => {
  const slide = await prisma.Top_Banner.findMany({
    orderBy: {
      id: "desc"
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

exports.getSingleBanner = async (req, res) => {
  const slide = await prisma.Top_Banner.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.saveBanner = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { date } = req.body;
    const image = req.file.filename;

    try {
      const slide = await prisma.Top_Banner.create({
        data: {
          date,
          image,
        },
      });
      res.json(slide);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateBanner = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingBanner = await prisma.Top_Banner.findUnique({ where: { id: slideId } });

    if (!existingBanner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req.file;
      const previousImagePath = path.join('public', 'uploads', existingBanner.image);
      if(previousImagePath){
        fs.unlinkSync(previousImagePath);
      }

      // Update slide with new image
      const updatedBanner = await prisma.Top_Banner.update({
        where: { id: slideId },
        data: {
          image: newImage.filename,
        },
      });
      res.json(updatedBanner);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteBanner = async (req, res) => {
  const slide = await prisma.Top_Banner.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  const previousImagePath = path.join('public', 'uploads', slide.image);
  if(previousImagePath){
    fs.unlinkSync(previousImagePath);
  }
  res.json(slide)
}
