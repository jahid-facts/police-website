
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getActivitySlider = async (req, res) => {
  const slide = await prisma.Activity_Slider.findMany({});
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

exports.getSingleActivitySlider = async (req, res) => {
  const slide = await prisma.Activity_Slider.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.saveActivitySlider = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { title } = req.body;
    const image = req.file.filename;

    try {
      const slide = await prisma.Activity_Slider.create({
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


exports.updateActivitySlider = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingActivitySlider = await prisma.Activity_Slider.findUnique({ where: { id: slideId } });

    if (!existingActivitySlider) {
      return res.status(404).json({ error: 'ActivitySlider not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      const previousImagePath = path.join('public', 'uploads', existingActivitySlider.image);
      if(newImage){
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }

      // Update slide with new image
      const updatedActivitySlider = await prisma.Activity_Slider.update({
        where: { id: slideId },
        data: {
          title: req.body.title,
          image: newImage ? newImage.filename : existingActivitySlider.image,
        },
      });
      res.json(updatedActivitySlider);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteActivitySlider = async (req, res) => {
  const slide = await prisma.Activity_Slider.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  
  if (slide.image) {
    const previousImagePath = path.join('public', 'uploads', slide.image);
    try {
      fs.unlinkSync(previousImagePath);
    } catch (error) {
      console.log(error)
    }
  }
  res.json(slide)
}
