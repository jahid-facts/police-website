
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getDirectoryCategories = async (req, res) => {
  const category = await prisma.Directory_Categories.findMany({
    include: {
      sub_categories : {
        include: {
          directories : true
        }
      },
      categories: {
        orderBy: {
          index: "asc"
        }
      }

    }
  });
  res.json(category)

}

exports.getSingleDirectoryCategories = async (req, res) => {
  const user = await prisma.Directory_Categories.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      categories: true,
      sub_categories : true
    }
  })
  res.json(user)
}

exports.saveDirectoryCategories = async (req, res) => {
  const { title, index } = req.body
  const category = await prisma.Directory_Categories.create({
    data: {
      title,
      index
    },
  })
  res.json(category)

}
exports.updateDirectoryCategories = async (req, res) => {
  const { title, index } = req.body
  const category = await prisma.Directory_Categories.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      title,
      index
    },
  })

  res.json(category)

}
exports.deleteDirectoryCategories = async (req, res) => {
  const category = await prisma.Directory_Categories.delete({
    where: {
      id: Number(req.params.id),
    }
  })

  res.json(category)

}
