
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getBitNews = async (req, res) => {
  const bitNews = await prisma.BitNews.findMany({
    include: {
      officer: true
    }
  });
  res.json(bitNews)

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

exports.getSingleBitNews = async (req, res) => {
  const bitNews = await prisma.BitNews.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(bitNews)
}
exports.getBitNewsByOfficer = async (req, res) => {
  const bitNews = await prisma.BitNews.findMany({
    include: {
      officer: true
    },
    where: {
      officerId: Number(req.params.officerId),
    },
  })
  res.json(bitNews)
}

exports.saveBitNews = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }


    const { title, content, officerId } = req.body;
    const image = req?.file?.filename ? req?.file?.filename : null;

    try {
      const bitNews = await prisma.BitNews.create({
        data: {
          title,
          content,
          officerId: Number(officerId),
          image,
        },
      });
      res.json(bitNews);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateBitNews = async (req, res) => {
  const bitNewsId = Number(req.params.id);
  try {
    const existingBitNews = await prisma.BitNews.findUnique({ where: { id: bitNewsId } });

    if (!existingBitNews) {
      return res.status(404).json({ error: 'BitNews not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      if (newImage && existingBitNews.image) {
        const previousImagePath = path.join('public', 'uploads', existingBitNews.image);
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }

      // Update bitNews with new image
      const { title, content, officerId  } = req.body;
      const updatedBitNews = await prisma.BitNews.update({
        where: { id: bitNewsId },
        data: {
          title,
          content,
          officerId: Number(officerId),
          image: newImage ? newImage.filename : existingBitNews.image,
        },
      });
      res.json(updatedBitNews);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteBitNews = async (req, res) => {
  const bitNews = await prisma.BitNews.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  if (bitNews.image) {
    const previousImagePath = path.join('public', 'uploads', bitNews.image);
    if (previousImagePath) {
      try {
        fs.unlinkSync(previousImagePath);
      } catch (error) {
        console.log(error)
      }
    }
  }
  res.json(bitNews)
}
