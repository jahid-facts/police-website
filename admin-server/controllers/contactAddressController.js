
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getContactAddress = async (req, res) => {
  const slide = await prisma.contact_address.findFirst({});
  res.json(slide)

}

exports.getSingleContactAddress = async (req, res) => {
  const slide = await prisma.contact_address.findUnique({
    where: {
      id: Number(req.params.id),
    },
  })
  res.json(slide)
}

exports.saveContactAddress = async (req, res) => {

  const { office, phone ,fax ,mobile , email, map} = req.body;

  try {
    const slide = await prisma.contact_address.create({
      data: {
        office, phone ,fax ,mobile , email, map
      },
    });
    res.json(slide);
  } catch (error) {

    res.status(500).json({ error: error.message });
  }

};


exports.updateContactAddress = async (req, res) => {
  const slideId = Number(req.params.id);
  try {
    const existingContactAddress = await prisma.contact_address.findUnique({ where: { id: slideId } });

    if (!existingContactAddress) {
      return res.status(404).json({ error: 'ContactAddress not found' });
    }

    const { office, phone ,fax ,mobile , email, map } = req.body;

    // Update slide with new image
    const updatedContactAddress = await prisma.contact_address.update({
      where: { id: slideId },
      data: {
        office, phone ,fax ,mobile , email, map
      },
    });
    res.json(updatedContactAddress);


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteContactAddress = async (req, res) => {
  try{
    const slide = await prisma.contact_address.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    res.json(slide)
  }catch(error){
    res.status(500).json({ error: 'Internal server error' });
  }
   
}
