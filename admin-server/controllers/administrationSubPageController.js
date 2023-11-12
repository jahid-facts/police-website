
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getAdministrationSubPages = async (req, res) => {
  const page = await prisma.administration_Sub_Pages.findMany({
    include:{
      page: true
    }
  });
  res.json(page)

}



exports.getSingleAdministrationSubPages = async (req, res) => {
  const page = await prisma.administration_Sub_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveAdministrationSubPages = async (req, res) => {
    const { title , content, pageId, index} = req.body;
    try {
      const page = await prisma.administration_Sub_Pages.create({
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


exports.updateAdministrationSubPages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingAdministrationSubPages = await prisma.administration_Sub_Pages.findUnique({ where: { id: pageId } });

    if (!existingAdministrationSubPages) {
      return res.status(404).json({ error: 'AdministrationSubPages not found' });
    }
      // Update page with new image
      const updatedAdministrationSubPages = await prisma.administration_Sub_Pages.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          pageId : req.body.pageId,
          index : req.body.index,
        },
      });
      res.json(updatedAdministrationSubPages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteAdministrationSubPages = async (req, res) => {
  const page = await prisma.administration_Sub_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
