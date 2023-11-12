
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getZillaPolicePages = async (req, res) => {
  const page = await prisma.Zilla_Police_Pages.findMany({
    include:{
      subPages: true
    }
  });
  res.json(page)

}



exports.getSingleZillaPolicePages = async (req, res) => {
  const page = await prisma.Zilla_Police_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveZillaPolicePages = async (req, res) => {
    const { title , content, index} = req.body;
    try {
      const page = await prisma.Zilla_Police_Pages.create({
        data: {
          title,
          content,
          index
        },
      });
      res.json(page);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
};


exports.updateZillaPolicePages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingZillaPolicePages = await prisma.Zilla_Police_Pages.findUnique({ where: { id: pageId } });

    if (!existingZillaPolicePages) {
      return res.status(404).json({ error: 'ZillaPolicePages not found' });
    }
      // Update page with new image
      const updatedZillaPolicePages = await prisma.Zilla_Police_Pages.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          index: req.body.index,
        },
      });
      res.json(updatedZillaPolicePages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteZillaPolicePages = async (req, res) => {
  const page = await prisma.Zilla_Police_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
