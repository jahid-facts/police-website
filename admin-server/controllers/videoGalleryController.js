
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getVideoGallery = async (req, res) => {
  const videoGallery = await prisma.Video_Gallery.findMany();
  res.json(videoGallery)

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

exports.getSingleVideoGallery = async (req, res) => {
  const videoGallery = await prisma.Video_Gallery.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(videoGallery)
}

exports.saveVideoGallery = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { title, content } = req.body;
    const image = req.file.filename;

    try {
      const videoGallery = await prisma.Video_Gallery.create({
        data: {
          title,
          content,
          image,
        },
      });
      res.json(videoGallery);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
      console.log(error)
    }
  });
};


exports.updateVideoGallery = async (req, res) => {
  const videoGalleryId = Number(req.params.id);
  try {
    const existingVideoGallery = await prisma.Video_Gallery.findUnique({ where: { id: videoGalleryId } });

    if (!existingVideoGallery) {
      return res.status(404).json({ error: 'VideoGallery not found' });
    }
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: "File upload error" });
        } else if (err) {
          return res.status(500).json({ error: "Internal server error" });
        }
        const newImage = req?.file;
        const { title, content } = req.body;

        const previousImagePath = path.join('public', 'uploads', existingVideoGallery.image);
        if (newImage) {
          try {
            fs.unlinkSync(previousImagePath);
          } catch (error) {
            console.log(error)
          }
        }

        // Update videoGallery with new image
        const updatedVideoGallery = await prisma.Video_Gallery.update({
          where: { id: videoGalleryId },
          data: {
            image: newImage? newImage.filename : existingVideoGallery.image,
            title,
            content
          },
        });
        res.json(updatedVideoGallery);
      })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteVideoGallery = async (req, res) => {
  const videoGallery = await prisma.Video_Gallery.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  const previousImagePath = path.join('public', 'uploads', videoGallery.image);
  try {
    fs.unlinkSync(previousImagePath);
  } catch (error) {
    console.log(error)
  }
  res.json(videoGallery)
}
