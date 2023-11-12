
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getCrimePages = async (req, res) => {
  const page = await prisma.Crime_Mangement.findMany({});
  res.json(page)

}



exports.getSingleCrimePages = async (req, res) => {
  const page = await prisma.Crime_Mangement.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveCrimePages = async (req, res) => {
    const { title , content, index} = req.body;
    try {
      const page = await prisma.Crime_Mangement.create({
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


exports.updateCrimePages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingCrimePages = await prisma.Crime_Mangement.findUnique({ where: { id: pageId } });

    if (!existingCrimePages) {
      return res.status(404).json({ error: 'CrimePages not found' });
    }
      // Update page with new image
      const updatedCrimePages = await prisma.Crime_Mangement.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          index: req.body.index,
        },
      });
      res.json(updatedCrimePages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteCrimePages = async (req, res) => {
  const page = await prisma.Crime_Mangement.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
