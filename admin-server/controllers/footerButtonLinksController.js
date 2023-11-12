
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getButtonLink = async (req, res) => {
    const data = await prisma.button_links.findMany({});
    res.json(data)

}

exports.getSingleButtonLink = async (req, res) => {
    const data = await prisma.button_links.findUnique({
        where: {
          id: Number(req.params.id),
        },
      })
    res.json(data)
}

exports.saveButtonLink = async (req, res) => {
    const data = await prisma.button_links.create({
      data: req.body
    })
    res.json(data)
   
}
exports.updateButtonLink = async (req, res) => {
    const {  title,link, headingId  } = req.body
    const data = await prisma.button_links.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title,
        link, 
      },
    })
    
    res.json(data)
   
}
exports.deleteButtonLink = async (req, res) => {
    const data = await prisma.button_links.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    
    res.json(data)
   
}
