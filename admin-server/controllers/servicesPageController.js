
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getServicesPages = async (req, res) => {
  const page = await prisma.Service_Pages.findMany({
    include:{
      subPages: true
    }
  });
  res.json(page)

}



exports.getSingleServicesPages = async (req, res) => {
  const page = await prisma.Service_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveServicesPages = async (req, res) => {
    const { title , content, index} = req.body;
    try {
      const page = await prisma.Service_Pages.create({
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


exports.updateServicesPages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingServicesPages = await prisma.Service_Pages.findUnique({ where: { id: pageId } });

    if (!existingServicesPages) {
      return res.status(404).json({ error: 'ServicesPages not found' });
    }
      // Update page with new image
      const updatedServicesPages = await prisma.Service_Pages.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          index: req.body.index,
        },
      });
      res.json(updatedServicesPages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteServicesPages = async (req, res) => {
  const page = await prisma.Service_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
