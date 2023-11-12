
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getSlide = async (req, res) => {
  const slide = await prisma.right_others.findMany();
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

exports.getSingleSlide = async (req, res) => {
  const slide = await prisma.right_others.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.saveSlide = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { title } = req.body;
    const image = req.file.filename;

    try {
      const slide = await prisma.right_others.create({
        data: {
          title,
          image,
        },
      });
      res.json(slide);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Database error" });
    }
  });
};





exports.updateSlide = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingSlide = await prisma.right_others.findUnique({ where: { id: slideId } });

    if (!existingSlide) {
      return res.status(404).json({ error: 'Slide not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req.file;
      const previousImagePath = path.join('public', 'uploads', existingSlide.image);
      if(newImage){
        try{
         fs.unlinkSync(previousImagePath); 
        }catch(error){
          console.log(error)
        }
      }

      // Update slide with new image
      const updatedSlide = await prisma.right_others.update({
        where: { id: slideId },
        data: {
          image: newImage?.filename ? newImage.filename : existingSlide.image,
          title: req.body.title,
        },
      });
      res.json(updatedSlide);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteSlide = async (req, res) => {
  const slide = await prisma.right_others.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  const previousImagePath = path.join('public', 'uploads', slide.image);
  if(previousImagePath){
    try{
     fs.unlinkSync(previousImagePath); 
    }catch(error){
      console.log(error)
    }
    
  }
  res.json(slide)
}
