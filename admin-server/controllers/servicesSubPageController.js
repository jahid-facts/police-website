
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getServicesSubPages = async (req, res) => {
  const page = await prisma.Service_Sub_Pages.findMany({
    include: {
      page: true
    }
  });
  res.json(page)

}



exports.getSingleServicesSubPages = async (req, res) => {
  const page = await prisma.Service_Sub_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveServicesSubPages = async (req, res) => {
  const { title, content, pageId, index } = req.body;
  try {
    const page = await prisma.Service_Sub_Pages.create({
      data: {
        title,
        content,
        pageId,
        index
      },
    });
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};


exports.updateServicesSubPages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingServicesSubPages = await prisma.Service_Sub_Pages.findUnique({ where: { id: pageId } });

    if (!existingServicesSubPages) {
      return res.status(404).json({ error: 'ServicesSubPages not found' });
    }
    // Update page with new image
    const updatedServicesSubPages = await prisma.Service_Sub_Pages.update({
      where: { id: pageId },
      data: {
        title: req.body.title,
        content: req.body.content,
        pageId: req.body.pageId,
        index: req.body.index,
      },
    });
    res.json(updatedServicesSubPages);


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteServicesSubPages = async (req, res) => {
  const page = await prisma.Service_Sub_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
