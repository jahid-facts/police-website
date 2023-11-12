
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();

exports.getTest = async (req, res) => {

  res.send("hello")

}
exports.getNews = async (req, res) => {
  const news = await prisma.Latest_News.findMany({
    orderBy: {
      id: 'desc',
    }
  });
  res.json(news)

}

exports.getSingleNews = async (req, res) => {
  const user = await prisma.Latest_News.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(user)
}
// file upload
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

}).single("file");


exports.saveNews = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { content, title } = req.body;
    const file = req?.file?.filename ? req?.file?.filename : null;

    try {
      const notice = await prisma.Latest_News.create({
        data: {
          content,
          title,
          file,
        },
      });
      res.json(notice);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Database error" });
    }
  });

}
exports.updateNews = async (req, res) => {
  const noticeId = Number(req.params.id);
  try {
    const existingNotice = await prisma.Latest_News.findUnique({ where: { id: noticeId } });

    if (!existingNotice) {
      return res.status(404).json({ error: 'Notice not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const file = req?.file;
      const previousImagePath = path.join('public', 'uploads', existingNotice.file);
      if (file) {
        fs.unlinkSync(previousImagePath);
      }

      // Update notice with new image
      const { content, title } = req.body;
      const updatedNotice = await prisma.Latest_News.update({
        where: { id: noticeId },
        data: {
          content,
          title,
          file: file ? file.filename : existingNotice.file,
        },
      });
      res.json(updatedNotice);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
}
exports.deleteNews = async (req, res) => {
  const notice = await prisma.Latest_News.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  if (notice.file) {
    const previousImagePath = path.join('public', 'uploads', notice.file);
    if (previousImagePath) {
      fs.unlinkSync(previousImagePath);
    }
  }

  res.json(notice)

}
