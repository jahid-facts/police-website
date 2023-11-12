
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getEmployees = async (req, res) => {
  const employee = await prisma.Employees.findMany();
  res.json(employee)

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

exports.getSingleEmployees = async (req, res) => {
  const employee = await prisma.Employees.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(employee)
}

exports.saveEmployees = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { name, designation, mobile, phone } = req.body;
    const image = req.file.filename;

    try {
      const employee = await prisma.Employees.create({
        data: {
          name, 
          designation, 
          mobile, 
          phone,
          image,
        },
      });
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
      console.log(error)
    }
  });
};


exports.updateEmployees = async (req, res) => {
  const employeeId = Number(req.params.id);
  try {
    const existingEmployees = await prisma.Employees.findUnique({ where: { id: employeeId } });

    if (!existingEmployees) {
      return res.status(404).json({ error: 'Employees not found' });
    }
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: "File upload error" });
        } else if (err) {
          return res.status(500).json({ error: "Internal server error" });
        }
        const newImage = req?.file;
        const { name, designation, mobile, phone } = req.body;

        const previousImagePath = path.join('public', 'uploads', existingEmployees.image);
        if (newImage) {
          try {
            fs.unlinkSync(previousImagePath);
          } catch (error) {
            console.log(error)
          }
        }

        // Update employee with new image
        const updatedEmployees = await prisma.Employees.update({
          where: { id: employeeId },
          data: {
            image: newImage? newImage.filename : existingEmployees.image,
            name, 
            designation, 
            mobile, 
            phone
          },
        });
        res.json(updatedEmployees);
      })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteEmployees = async (req, res) => {
  const employee = await prisma.Employees.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  const previousImagePath = path.join('public', 'uploads', employee.image);
  try {
    fs.unlinkSync(previousImagePath);
  } catch (error) {
    console.log(error)
  }
  res.json(employee)
}
