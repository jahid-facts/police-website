
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getContactPerson = async (req, res) => {
  const slide = await prisma.contact_person.findMany({
    orderBy: {
      index: 'asc'
    }
  });
  res.json(slide)

}

exports.getSingleContactPerson = async (req, res) => {
  const slide = await prisma.contact_person.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.saveContactPerson = async (req, res) => {

  const { name, email, index} = req.body;

  try {
    const slide = await prisma.contact_person.create({
      data: {
        name, email, index : Number(index), others: null
      },
    });
    res.json(slide);
  } catch (error) {

    res.status(500).json({ error: error.message });
  }

};


exports.updateContactPerson = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingContactPerson = await prisma.contact_person.findUnique({ where: { id: slideId } });

    if (!existingContactPerson) {
      return res.status(404).json({ error: 'ContactPerson not found' });
    }

    const { name, email, index } = req.body;

    // Update slide with new image
    const updatedContactPerson = await prisma.contact_person.update({
      where: { id: slideId },
      data: {
        name, email, index : Number(index), others: null
      },
    });
    res.json(updatedContactPerson);


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteContactPerson = async (req, res) => {
  try{
    const slide = await prisma.contact_person.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    res.json(slide)
  }catch(error){
    res.status(500).json({ error: 'Internal server error' });
  }
   
}
