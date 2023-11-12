
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getImageGallery = async (req, res) => {
  const imageGallery = await prisma.Image_Gallery.findMany({
    select: {
      id: true,
      title: true,
      mainImage: true,
      multipleImages: true
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
}).fields([
  { name: "mainImage", maxCount: 1},
  { name: "multipleImages", maxCount: 20},
])
// exports.multipleUpload = upload.fields([
//   { name: "mainImage", maxCount: 1},
//   { name: "multipleImages", maxCount: 20},
// ])


exports.getSingleImageGallery = async (req, res) => {
  const imageGallery = await prisma.Image_Gallery.findUnique({
    where: {
      id: Number(req.params.id),
    },
    select: {
      id: true,
      title: true,
      mainImage: true,
      multipleImages: true
    },
  })
  res.json(imageGallery)
}

exports.saveImageGallery = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { title } = req.body;
    const image = req.files['mainImage'][0].filename;
    const multipleImages = req.files['multipleImages'].map(file => file.filename);

    try {
      const imageGallery = await prisma.Image_Gallery.create({
        data: {
          title,
          mainImage: image,
          multipleImages: multipleImages.toString()
        },
      });
      res.json(imageGallery);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateImageGallery = async (req, res) => {
  const imageGalleryId = Number(req.params.id);
  try {
    const existingImageGallery = await prisma.Image_Gallery.findUnique({ where: { id: imageGalleryId } });

    if (!existingImageGallery) {
      return res.status(404).json({ error: 'ImageGallery not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req.files?.['mainImage']?.[0].filename;
      const previousImagePath = path.join('public', 'uploads', existingImageGallery.mainImage);
      if(newImage){
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.error('Error deleting file:', error);
        }
      }
      // const image = req.files['mainImage'][0].filename;
      const multipleImages = req.files['multipleImages'] ? req.files['multipleImages'].map(file => file.filename) : '';
      // Update imageGallery with new image
      const newImages = multipleImages ? multipleImages.toString() + ',' + req.body.multipleImages.toString() : req.body.multipleImages.toString();
      
      const updatedImageGallery = await prisma.Image_Gallery.update({
        where: { id: imageGalleryId },
        data: {
          title: req.body.title,
          mainImage: newImage ? newImage : existingImageGallery.mainImage,
          multipleImages: newImages
        },
      });
      res.json(updatedImageGallery);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteImageGallery = async (req, res) => {
  const imageGallery = await prisma.Image_Gallery.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  const previousImagePath = path.join('public', 'uploads', imageGallery.mainImage);
  try {
    fs.unlinkSync(previousImagePath);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
  const multipleImages = imageGallery.multipleImages.split(',')
  multipleImages.map(img => {
    const multiPath = path.join('public', 'uploads', img);
    try {
      fs.unlinkSync(multiPath);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  })
  res.json(imageGallery)
}
exports.deleteSingleImage = async (req, res) => {
  console.log(req.body.img, "body")
  const img = req.body.img
  const imageGallery = await prisma.Image_Gallery.findUnique({
    where: {
      id: Number(req.params.id),
    }
  })
  const previousImagePath = path.join('public', 'uploads', img);
  try {
    fs.unlinkSync(previousImagePath);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
  const newImages = imageGallery.multipleImages.split(',').filter(img => img !== req.body.img);
  const updatedImageGallery = await prisma.Image_Gallery.update({
    where: { id: Number(req.params.id) },
    data: {
      multipleImages: newImages.toString()
    },
  });
  res.json(updatedImageGallery)
}
