
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getImageMultipleGallery = async (req, res) => {
  const imageGallery = await prisma.Image_Gallery.findMany({
    select: {
      id: true,
      title: true,
      Image: true, 
      
    },
    
  });
  res.json(imageGallery)

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

}).single("Image");

exports.getSingleImageMultipleGallery = async (req, res) => {
  const imageGallery = await prisma.Image_Gallery.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(imageGallery)
}

exports.saveImageMultipleGallery = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { title, galleryId } = req.body;
    const image = req.file.filename;

    try {
      const imageGallery = await prisma.Image_Gallery.create({
        data: {
          title,
          Image: image,
          galleryId
        },
      });
      res.json(imageGallery);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateImageMultipleGallery = async (req, res) => {
  const imageGalleryId = Number(req.params.id);
  try {
    const existingImageMultipleGallery = await prisma.Image_Gallery.findUnique({ where: { id: imageGalleryId } });

    if (!existingImageMultipleGallery) {
      return res.status(404).json({ error: 'ImageMultipleGallery not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      const previousImagePath = path.join('public', 'uploads', existingImageMultipleGallery.Image);
      if(newImage){
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }

      // Update imageGallery with new image
      const updatedImageMultipleGallery = await prisma.Image_Gallery.update({
        where: { id: imageGalleryId },
        data: {
          title: req.body.title,
          Image: newImage ? newImage.filename : existingImageMultipleGallery.Image,
        },
      });
      res.json(updatedImageMultipleGallery);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteImageMultipleGallery = async (req, res) => {
  const imageGallery = await prisma.Image_Gallery.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  const previousImagePath = path.join('public', 'uploads', imageGallery.Image);
  if(previousImagePath){
    fs.unlinkSync(previousImagePath);
  }
  res.json(imageGallery)
}
