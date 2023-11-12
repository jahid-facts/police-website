
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getActivity = async (req, res) => {
  const activity = await prisma.Recent_Activity.findMany();
  res.json(activity)

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

exports.getSingleActivity = async (req, res) => {
  const activity = await prisma.Recent_Activity.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(activity)
}

exports.saveActivity = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { heading, content } = req.body;
    const image = req.file.filename;

    try {
      const activity = await prisma.Recent_Activity.create({
        data: {
          heading,
          content,
          image,
        },
      });
      res.json(activity);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
      console.log(error)
    }
  });
};


exports.updateActivity = async (req, res) => {
  const activityId = Number(req.params.id);
  try {
    const existingActivity = await prisma.Recent_Activity.findUnique({ where: { id: activityId } });

    if (!existingActivity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: "File upload error" });
        } else if (err) {
          return res.status(500).json({ error: "Internal server error" });
        }
        const newImage = req?.file;
        const { heading, content } = req.body;

        const previousImagePath = path.join('public', 'uploads', existingActivity.image);
        if (newImage) {
          try {
            fs.unlinkSync(previousImagePath);
          } catch (error) {
            console.log(error)
          }
        }

        // Update activity with new image
        const updatedActivity = await prisma.Recent_Activity.update({
          where: { id: activityId },
          data: {
            image: newImage? newImage.filename : existingActivity.image,
            heading,
            content
          },
        });
        res.json(updatedActivity);
      })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteActivity = async (req, res) => {
  const activity = await prisma.Recent_Activity.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  const previousImagePath = path.join('public', 'uploads', activity.image);
  try {
    fs.unlinkSync(previousImagePath);
  } catch (error) {
    console.log(error)
  }
  res.json(activity)
}
