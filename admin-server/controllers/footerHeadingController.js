
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getFooterHeading = async (req, res) => {
    const heading = await prisma.Footer_Heading.findMany({
      include: {
        footerData: true
      }
    });
    res.json(heading)

}

exports.getSingleFooterHeading = async (req, res) => {
    const heading = await prisma.Footer_Heading.findUnique({
        where: {
          id: Number(req.params.id),
        },
      })
    res.json(heading)
}

exports.saveFooterHeading = async (req, res) => {
    const {  title } = req.body
    const heading = await prisma.Footer_Heading.create({
      data: {
        title,
      },
    })
    res.json(heading)
   
}
exports.updateFooterHeading = async (req, res) => {
    const {  title } = req.body
    const heading = await prisma.Footer_Heading.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title,
      },
    })
    
    res.json(heading)
   
}
exports.deleteFooterHeading = async (req, res) => {
    const heading = await prisma.Footer_Heading.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    
    res.json(heading)
   
}
