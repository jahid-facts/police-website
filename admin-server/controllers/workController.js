

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getWork = async (req, res) => {
  const work = await prisma.Works.findMany({
    include: {
      workSection: {
        select: {
          id: true,
          title: true
        }
      }
    },


  });
  res.json(work)

}
exports.getSingleWork = async (req, res) => {
  const work = await prisma.Works.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(work)
}

exports.saveWork = async (req, res) => {
  const { title, content, workSectionId } = req.body;

  try {
    const work = await prisma.Works.create({
      data: {
        title,
        content,
        workSectionId
      },
    });
    res.json(work);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Database error" });
  }

};


exports.updateWork = async (req, res) => {
  const { title, content, workSectionId } = req.body;
  const workId = Number(req.params.id);
  try {
    const existingWork = await prisma.Works.findUnique({ where: { id: workId } });

    if (!existingWork) {
      return res.status(404).json({ error: 'Work not found' });
    }
    const updatedWork = await prisma.Works.update({
      where: { id: workId },
      data: {
        title,
        content,
        workSectionId
      },
    });
    res.json(updatedWork);


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteWork = async (req, res) => {
  const work = await prisma.Works.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(work)
}
