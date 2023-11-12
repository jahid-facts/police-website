

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getActivitiesSubPages = async (req, res) => {
  const page = await prisma.Activities_Sub_Pages.findMany({
    include:{
      page: true
    }
  });
  res.json(page)

}



exports.getSingleActivitiesSubPages = async (req, res) => {
  const page = await prisma.Activities_Sub_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveActivitiesSubPages = async (req, res) => {
    const { title , content, pageId,index} = req.body;
    try {
      const page = await prisma.Activities_Sub_Pages.create({
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


exports.updateActivitiesSubPages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingActivitiesSubPages = await prisma.Activities_Sub_Pages.findUnique({ where: { id: pageId } });

    if (!existingActivitiesSubPages) {
      return res.status(404).json({ error: 'ActivitiesSubPages not found' });
    }
      // Update page with new image
      const updatedActivitiesSubPages = await prisma.Activities_Sub_Pages.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          pageId : req.body.pageId,
          index : req.body.index,
        },
      });
      res.json(updatedActivitiesSubPages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteActivitiesSubPages = async (req, res) => {
  const page = await prisma.Activities_Sub_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
