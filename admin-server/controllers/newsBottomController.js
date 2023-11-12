
const path = require("path");
const user = require("../models/users.model");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.getBottomNews = async (req, res) => {
    const news = await prisma.Bottom_News.findMany();
    res.json(news)

}

exports.getSingleBottomNews = async (req, res) => {
    const user = await prisma.Bottom_News.findUnique({
        where: {
          id: Number(req.params.id),
        },
      })
    res.json(user)
}

exports.saveBottomNews = async (req, res) => {
    const { date, description,link } = req.body
    const news = await prisma.Bottom_News.create({
      data: {
        date,
        link,
        description,
      },
    })
    res.json(news)
   
}
exports.updateBottomNews = async (req, res) => {
    const { date, description, link } = req.body
    const news = await prisma.Bottom_News.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        date,
        description,
        link
      },
    })
    
    res.json(news)
   
}
exports.deleteBottomNews = async (req, res) => {
    const news = await prisma.Bottom_News.delete({
      where: {
        id: Number(req.params.id),
      }
    })
    
    res.json(news)
   
}
// app.get('/latest-news', async (req, res) => {
//     // const posts = await prisma.post.findMany({
//     //   where: { published: true },
//     //   include: { author: true },
//     // })
//     // res.json(posts)
//     res.send("hello")
//   })
  
//   app.post('/save-latest-news', async (req, res) => {
//     const { date, description } = req.body
//     // const news = await prisma.latest_news.create({
//     //   data: {
//     //     date,
//     //     description,
//     //   },
//     // })
//     // res.json(news)
//     console.log(req.body)
//   })
  
//   app.put('/publish/:id', async (req, res) => {
//     const { id } = req.params
//     const post = await prisma.post.update({
//       where: { id },
//       data: { published: true },
//     })
//     res.json(post)
//   })
  
//   app.delete('/user/:id', async (req, res) => {
//     const { id } = req.params
//     const user = await prisma.user.delete({
//       where: {
//         id,
//       },
//     })
//     res.json(user)
//   })