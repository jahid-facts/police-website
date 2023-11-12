
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getFooterData = async (req, res) => {
    const data = await prisma.Footer_Data.findMany({
      include: {
        heading: true
      }
    });
    res.json(data)

}

exports.getSingleFooterData = async (req, res) => {
    const data = await prisma.Footer_Data.findUnique({
        where: {
          id: Number(req.params.id),
        },
      })
    res.json(data)
}

exports.saveFooterData = async (req, res) => {
    const data = await prisma.Footer_Data.create({
      data: req.body
    })
    res.json(data)
   
}
exports.updateFooterData = async (req, res) => {
    const {  title,link, headingId  } = req.body
    const data = await prisma.Footer_Data.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title,
        link, 
        headingId:Number(headingId)
      },
    })
    
    res.json(data)
   
}
exports.deleteFooterData = async (req, res) => {
    const data = await prisma.Footer_Data.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    
    res.json(data)
   
}
