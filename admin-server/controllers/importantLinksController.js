
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getImportantLink = async (req, res) => {
    const data = await prisma.important_links.findMany({});
    res.json(data)

}

exports.getSingleImportantLink = async (req, res) => {
    const data = await prisma.important_links.findUnique({
        where: {
          id: Number(req.params.id),
        },
      })
    res.json(data)
}

exports.saveImportantLink = async (req, res) => {
    const data = await prisma.important_links.create({
      data: req.body
    })
    res.json(data)
   
}
exports.updateImportantLink = async (req, res) => {
    const {  title,link, headingId  } = req.body
    const data = await prisma.important_links.update({
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
exports.deleteImportantLink = async (req, res) => {
    const data = await prisma.important_links.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    
    res.json(data)
   
}
