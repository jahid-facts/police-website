
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getSubDirectoryCategories = async (req, res) => {
  const category = await prisma.Directory_Sub_Categories.findMany({
    include: {
      category: true,
      directories: {
        orderBy: {
          index: "asc"
        }
      }

    }
  });
  res.json(category)

}

exports.getSingleSubDirectoryCategories = async (req, res) => {
  const user = await prisma.Directory_Sub_Categories.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      category: true,
    }
  })
  res.json(user)
}

exports.saveSubDirectoryCategories = async (req, res) => {
  const { title, index,categoryId } = req.body
  const category = await prisma.Directory_Sub_Categories.create({
    data: {
      title,
      index,
      categoryId:Number(categoryId)
    },
  })
  res.json(category)

}
exports.updateSubDirectoryCategories = async (req, res) => {
  const { title, index,categoryId } = req.body
  const category = await prisma.Directory_Sub_Categories.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      title,
      index,
      categoryId:Number(categoryId)
    },
  })

  res.json(category)

}
exports.deleteSubDirectoryCategories = async (req, res) => {
  const category = await prisma.Directory_Sub_Categories.delete({
    where: {
      id: Number(req.params.id),
    }
  })

  res.json(category)

}
