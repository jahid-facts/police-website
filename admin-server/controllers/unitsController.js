
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getUnits = async (req, res) => {
  const news = await prisma.Units.findMany({
    include: {
      sub_units: true
    }
  });
  res.json(news)

}

exports.getSingleUnits = async (req, res) => {
  const user = await prisma.Units.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      sub_units: true,
      forces: true,
      ex_forces: true
    }
  })
  res.json(user)
}

exports.saveUnits = async (req, res) => {
  const { title, index, content } = req.body
  const news = await prisma.Units.create({
    data: {
      title,
      index,
      content
    },
  })
  res.json(news)

}
exports.updateUnits = async (req, res) => {
  const { title, index, content } = req.body
  const news = await prisma.Units.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      title,
      index, content
    },
  })

  res.json(news)

}
exports.deleteUnits = async (req, res) => {
  const news = await prisma.Units.delete({
    where: {
      id: Number(req.params.id),
    }
  })

  res.json(news)

}
