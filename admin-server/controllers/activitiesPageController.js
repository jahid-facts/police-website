const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getActivitiesPages = async (req, res) => {
  const page = await prisma.Activities_Pages.findMany({
    include:{
      subPages: true
    }
  });
  res.json(page)

}



exports.getSingleActivitiesPages = async (req, res) => {
  const page = await prisma.Activities_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveActivitiesPages = async (req, res) => {
    const { title , content, index} = req.body;
    try {
      const page = await prisma.Activities_Pages.create({
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


exports.updateActivitiesPages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingActivitiesPages = await prisma.Activities_Pages.findUnique({ where: { id: pageId } });

    if (!existingActivitiesPages) {
      return res.status(404).json({ error: 'ActivitiesPages not found' });
    }
      // Update page with new image
      const updatedActivitiesPages = await prisma.Activities_Pages.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          index: req.body.index,
        },
      });
      res.json(updatedActivitiesPages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteActivitiesPages = async (req, res) => {
  const page = await prisma.Activities_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
