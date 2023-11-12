const { PrismaClient } = require("@prisma/client");
const { startOfDay, endOfDay } = require('date-fns');
const prisma = new PrismaClient();
exports.getVisitorCounter = async (req, res) => {
  try {
    const allVisitorCount = await prisma.visitor_counter.count();

    // Calculate the start and end of today
    const today = new Date();
    const startOfToday = startOfDay(today);
    const endOfToday = endOfDay(today);

    const todayVisitorCount = await prisma.visitor_counter.count({
      where: {
        createdAt: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });

    res.json({ allVisitorCount, todayVisitorCount });
  } catch (error) {
    console.error(`Error while fetching visitor count: ${error.message}`);
    res.status(500).json({ error: 'An error occurred while fetching visitor count' });
  }

}



exports.getSingleVisitorCounter = async (req, res) => {
  const page = await prisma.visitor_counter.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(page)
}

exports.saveVisitorCounter = async (req, res) => {
  const visitorNo = await prisma.visitor_counter.count({});
  console.log(visitorNo, "visitorNo")
    try {
    const page = await prisma.visitor_counter.create({
      data: {
        visitor_no: visitorNo + 1,
      },
    });
    res.json(page);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Database error" });
  }
};


exports.updateVisitorCounter = async (req, res) => {
  const pageId = Number(req.params.id);
  try {
    const existingVisitorCounter = await prisma.visitor_counter.findUnique({ where: { id: pageId } });

    if (!existingVisitorCounter) {
      return res.status(404).json({ error: 'VisitorCounter not found' });
    }
    // Update page with new image
    const updatedVisitorCounter = await prisma.visitor_counter.update({
      where: { id: pageId },
      data: {
        title: req.body.title,
        content: req.body.content,
        index: req.body.index,
      },
    });
    res.json(updatedVisitorCounter);


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteVisitorCounter = async (req, res) => {
  const page = await prisma.visitor_counter.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(page)
}
