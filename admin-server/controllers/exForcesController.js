
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getForces = async (req, res) => {
  const force = await prisma.Ex_Unit_Force.findMany({
    include: {
      unit: true,
      sub_units: true
    }

  });
  res.json(force)

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

exports.getSingleForces = async (req, res) => {
  const force = await prisma.Ex_Unit_Force.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(force)
}

exports.saveForces = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { name, designation, from_date,to_date, sub_unitId, unitId } = req.body;
    const image = req?.file?.filename ? req?.file?.filename : null;

    try {
      const force = await prisma.Ex_Unit_Force.create({
        data: {
          name, designation, from_date,to_date, sub_unitId: parseInt(sub_unitId), unitId: parseInt(unitId),
          image,
        },
      });
      res.json(force);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateForces = async (req, res) => {
  const forceId = Number(req.params.id);
  try {
    const existingForces = await prisma.Ex_Unit_Force.findUnique({ where: { id: forceId } });

    if (!existingForces) {
      return res.status(404).json({ error: 'Forces not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      const previousImagePath = path.join('public', 'uploads', existingForces.image);
      if (newImage) {
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }

      // Update force with new image
      const {  name, designation, from_date,to_date, sub_unitId, unitId } = req.body;
      const updatedForces = await prisma.Ex_Unit_Force.update({
        where: { id: forceId },
        data: {
          name, designation, from_date,to_date, sub_unitId: parseInt(sub_unitId), unitId: parseInt(unitId),
          image: newImage ? newImage.filename : existingForces.image,
        },
      });
      res.json(updatedForces);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteForces = async (req, res) => {
  const force = await prisma.Ex_Unit_Force.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  if (force.image) {
    const previousImagePath = path.join('public', 'uploads', force.image);
    if (previousImagePath) {
      fs.unlinkSync(previousImagePath);
    }
  }
  res.json(force)
}
