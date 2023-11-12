
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getNoticeCategories = async (req, res) => {
    const category = await prisma.Notice_Categories.findMany({
      include:{
        notices:true
      }
    });
    res.json(category)

}

exports.getSingleNoticeCategories = async (req, res) => {
    const user = await prisma.Notice_Categories.findUnique({
        where: {
          id: Number(req.params.id),
        },
        include:{
          notices:true,
        }
      })
    res.json(user)
}

exports.saveNoticeCategories = async (req, res) => {
    const { title } = req.body
    const category = await prisma.Notice_Categories.create({
      data: {
        title,
      },
    })
    res.json(category)
   
}
exports.updateNoticeCategories = async (req, res) => {
    const { title } = req.body
    const category = await prisma.Notice_Categories.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title
      },
    })
    
    res.json(category)
   
}
exports.deleteNoticeCategories = async (req, res) => {
    const category = await prisma.Notice_Categories.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    
    res.json(category)
   
}
