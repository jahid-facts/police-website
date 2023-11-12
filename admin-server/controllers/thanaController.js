
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getThana = async (req, res) => {
  const page = await prisma.Thana.findMany({
    include:{
      bit_officers:{
        include:{
          bitNews:true
        }
      }
    }
  });
  res.json(page)

}



exports.getSingleThana = async (req, res) => {
  const page = await prisma.Thana.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveThana = async (req, res) => {
    const { title , content} = req.body;
    try {
      const page = await prisma.Thana.create({
        data: {
          title,
          content,
        },
      });
      res.json(page);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
};


exports.updateThana = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingThana = await prisma.Thana.findUnique({ where: { id: pageId } });

    if (!existingThana) {
      return res.status(404).json({ error: 'Thana not found' });
    }
      // Update page with new image
      const updatedThana = await prisma.Thana.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
        },
      });
      res.json(updatedThana);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteThana = async (req, res) => {
  const page = await prisma.Thana.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
