
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getDirectory = async (req, res) => {
  const directories = await prisma.Directoris.findMany({
    include: {
      category: true,
      subCategory: true
    },
    orderBy: {
      index: "asc",
    }

  });
  res.json(directories)

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

exports.getSingleDirectory = async (req, res) => {
  const directories = await prisma.Directoris.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(directories)
}

exports.saveDirectory = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }


    const { name, email, fax, mobile, phone, categoryId, designation, index, subCategoryId } = req.body;
    const image = req?.file?.filename ? req?.file?.filename : null;

    try {
      const directories = await prisma.Directoris.create({
        data: {
          name,
          email,
          fax,
          mobile,
          phone,
          categoryId: Number(categoryId),
          designation,
          image,
          index: Number(index),
          subCategoryId: Number(subCategoryId),
        },
      });
      res.json(directories);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateDirectory = async (req, res) => {
  const directoriesId = Number(req.params.id);
  try {
    const existingDirectory = await prisma.Directoris.findUnique({ where: { id: directoriesId } });

    if (!existingDirectory) {
      return res.status(404).json({ error: 'Directory not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      if (newImage && existingDirectory.image) {
        const previousImagePath = path.join('public', 'uploads', existingDirectory.image);
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }

      // Update directories with new image
      const { name, email, fax, mobile, phone, categoryId, designation, index, subCategoryId } = req.body;
      const updatedDirectory = await prisma.Directoris.update({
        where: { id: directoriesId },
        data: {
          name,
          email,
          fax,
          mobile,
          phone,
          categoryId: Number(categoryId),
          designation,
          image: newImage ? newImage.filename : existingDirectory.image,
          index: Number(index),
          subCategoryId: subCategoryId ? Number(subCategoryId) : null,
        },
      });
      res.json(updatedDirectory);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteDirectory = async (req, res) => {
  const directories = await prisma.Directoris.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  if (directories.image) {
    const previousImagePath = path.join('public', 'uploads', directories.image);
    if (previousImagePath) {
      try {
        fs.unlinkSync(previousImagePath);
      } catch (error) {
        console.log(error)
      }
    }
  }
  res.json(directories)
}
