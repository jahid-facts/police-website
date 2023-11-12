
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getBitPolicePages = async (req, res) => {
  const page = await prisma.Bit_Police_Pages.findMany({});
  res.json(page)

}



exports.getSingleBitPolicePages = async (req, res) => {
  const page = await prisma.Bit_Police_Pages.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveBitPolicePages = async (req, res) => {
    const { title , content, index} = req.body;
    try {
      const page = await prisma.Bit_Police_Pages.create({
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


exports.updateBitPolicePages = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingBitPolicePages = await prisma.Bit_Police_Pages.findUnique({ where: { id: pageId } });

    if (!existingBitPolicePages) {
      return res.status(404).json({ error: 'BitPolicePages not found' });
    }
      // Update page with new image
      const updatedBitPolicePages = await prisma.Bit_Police_Pages.update({
        where: { id: pageId },
        data: {
          title: req.body.title,
          content: req.body.content,
          index: req.body.index,
        },
      });
      res.json(updatedBitPolicePages);
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteBitPolicePages = async (req, res) => {
  const page = await prisma.Bit_Police_Pages.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
