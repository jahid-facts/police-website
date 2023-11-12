
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getAdministrationPages = async (req, res) => {
  const page = await prisma.administration_Pages.findMany({
    include:{
      subPages: true
    }
  });
  res.json(page)

}
exports.getAdministrationPagesOnly = async (req, res) => {
  const page = await prisma.administration_Pages.findMany({
    select:{
      title: true,
      id: true,
      index: true
    }
  });
  res.json(page)

}



exports.getSingleAdministrationPages = async (req, res) => {
  const page = await prisma.administration_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include:{
      exSp: true
    }
  })
  res.json(page)
}

exports.saveAdministrationPages = async (req, res) => {
    const { title , content, index} = req.body;
    try {
      const page = await prisma.administration_Pages.create({
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


exports.updateAdministrationPages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingAdministrationPages = await prisma.administration_Pages.findUnique({ where: { id: pageId } });

    if (!existingAdministrationPages) {
      return res.status(404).json({ error: 'AdministrationPages not found' });
    }
      // Update page with new image
      const updatedAdministrationPages = await prisma.administration_Pages.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          index: req.body.index,
        },
      });
      res.json(updatedAdministrationPages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteAdministrationPages = async (req, res) => {
  const page = await prisma.administration_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
