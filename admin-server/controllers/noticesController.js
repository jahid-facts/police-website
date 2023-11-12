
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();
exports.getNotice = async (req, res) => {
  const notice = await prisma.NoticeCategoryRelation.findMany({
    distinct: ['noticeId'],
    include: {
      category: true,
      notice: true,
    },
    orderBy: {
      id: 'desc'
    }
  });
  res.json(notice)

}
exports.getNoticeSetup = async (req, res) => {
  const notice = await prisma.NoticeCategoryRelation.findMany({
    include: {
      category: true,
      notice: true,
    },
    orderBy: {
      id: 'desc'
    }
  });
  res.json(notice)

}
exports.getNoticeByCategoryId = async (req, res) => {
  const notice = await prisma.NoticeCategoryRelation.findMany({
    where: {
      categoryId: Number(req.params.id),
    },
    include: {
      category: true,
      notice: true,
    },
    orderBy: {
      id: 'desc'
    }
  });
  res.json(notice)

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

}).single("file");

exports.getSingleNoticeSetUp = async (req, res) => {
  const notice = await prisma.NoticeCategoryRelation.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      category: true,
      notice: true,
    },
  })
  res.json(notice)
}
exports.getSingleNotice = async (req, res) => {
  const notice = await prisma.Notices.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(notice)
}

exports.saveNotice = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const { published_in_news, content, title } = req.body;
    const file = req?.file?.filename ? req?.file?.filename : null;

    try {
      const notice = await prisma.Notices.create({
        data: {
          published_in_news: published_in_news === "true" ? true : false,
          content,
          title,
          file,
        },
      });
      const categoryIds = req.body.categories;
      console.log(categoryIds, "categoryIds")
      // Assuming you have already created the "notice" object

      async function associateNoticeWithCategories() {
        for (const categoryId of categoryIds) {
          console.log(categoryId, "id")
          await prisma.noticeCategoryRelation.create({
            data: {
              noticeId: notice.id,
              categoryId: parseInt(categoryId),
            },
          });
        }
      }

      // Call the function to associate the notice with categories
      associateNoticeWithCategories()
        .then(() => {
          console.log("Categories associated with the notice successfully.");
        })
        .catch((error) => {
          console.error("Error associating categories with the notice:", error);
        });

      res.json(notice);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateNotice = async (req, res) => {
  const noticeId = Number(req.params.id);
  try {
    const existingNotice = await prisma.Notices.findUnique({ where: { id: noticeId } });

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
      let previousImagePath = null; // Initialize as null

      if (existingNotice.file) {
        // Construct the previousImagePath if existingNotice.file is defined
        previousImagePath = path.join('public', 'uploads', existingNotice.file);
      }

      if (file) {
        // Check if the previousImagePath is not null before unlinking
        if (previousImagePath) {
          fs.unlinkSync(previousImagePath);
        }
      }

      // Update notice with new image
      const { published_in_news, content, title } = req.body;
      const updatedNotice = await prisma.Notices.update({
        where: { id: noticeId },
        data: {
          published_in_news: published_in_news === "true" ? true : false,
          content,
          title,
          file: file ? file.filename : existingNotice.file,
        },
      });
      res.json(updatedNotice);
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteNotice = async (req, res) => {
  const notice = await prisma.NoticeCategoryRelation.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  // if (notice.file) {
  //   const previousImagePath = path.join('public', 'uploads', notice.file);
  //   if (previousImagePath) {
  //     fs.unlinkSync(previousImagePath);
  //   }
  // }

  res.json(notice)
}
