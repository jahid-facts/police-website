
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getZillaPoliceSubPages = async (req, res) => {
  const page = await prisma.Zilla_Police_Sub_Pages.findMany({
    include:{
      page: true
    }
  });
  res.json(page)

}



exports.getSingleZillaPoliceSubPages = async (req, res) => {
  const page = await prisma.Zilla_Police_Sub_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveZillaPoliceSubPages = async (req, res) => {
    const { title , content, pageId, index} = req.body;
    try {
      const page = await prisma.Zilla_Police_Sub_Pages.create({
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


exports.updateZillaPoliceSubPages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingZillaPoliceSubPages = await prisma.Zilla_Police_Sub_Pages.findUnique({ where: { id: pageId } });

    if (!existingZillaPoliceSubPages) {
      return res.status(404).json({ error: 'ZillaPoliceSubPages not found' });
    }
      // Update page with new image
      const updatedZillaPoliceSubPages = await prisma.Zilla_Police_Sub_Pages.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          pageId : req.body.pageId,
          index : req.body.index
        },
      });
      res.json(updatedZillaPoliceSubPages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteZillaPoliceSubPages = async (req, res) => {
  const page = await prisma.Zilla_Police_Sub_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
