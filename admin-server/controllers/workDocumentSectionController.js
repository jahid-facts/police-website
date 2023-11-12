
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getWorkDocumentSection = async (req, res) => {
  const slide = await prisma.Work_Document_Section.findMany({
    select: {
      id: true,
      title: true,
      image: true,
        works: {
          select: {
            id: true,
            title: true
          }
        }
      
    },
    
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

exports.getSingleWorkDocumentSection = async (req, res) => {
  const slide = await prisma.Work_Document_Section.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.saveWorkDocumentSection = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { title } = req.body;
    const image = req.file.filename;

    try {
      const slide = await prisma.Work_Document_Section.create({
        data: {
          title,
          image,
        },
      });
      res.json(slide);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateWorkDocumentSection = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingWorkDocumentSection = await prisma.Work_Document_Section.findUnique({ where: { id: slideId } });

    if (!existingWorkDocumentSection) {
      return res.status(404).json({ error: 'WorkDocumentSection not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      const previousImagePath = path.join('public', 'uploads', existingWorkDocumentSection.image);
      if(newImage){
        fs.unlinkSync(previousImagePath);
      }

      // Update slide with new image
      const updatedWorkDocumentSection = await prisma.Work_Document_Section.update({
        where: { id: slideId },
        data: {
          title: req.body.title,
          image: newImage ? newImage.filename : existingWorkDocumentSection.image,
        },
      });
      res.json(updatedWorkDocumentSection);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteWorkDocumentSection = async (req, res) => {
  const slide = await prisma.Work_Document_Section.delete({
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
