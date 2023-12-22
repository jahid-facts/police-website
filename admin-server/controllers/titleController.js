const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getTitle = async (req, res) => {
    // try {
    //     const page = await prisma.Category_Title.findMany({
    //         include: {
    //             Category_Subtitle: {
    //                 include: {
    //                     Category_Subtitle_Pages: {
    //                         include: {
    //                             Category_Subtitle_Subpages: {
    //                                 include: {
    //                                     Category_Subsequence: true
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     });
    //     res.json(page);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: "Internal server error" });
    // }



    try {
        const titlesWithNestedData = await prisma.Title.findMany({
            include: {
                subtitle: {
                    include: {
                        pages: {
                            include: {
                                subpages: {
                                    include: {
                                        subsequence: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        res.json(titlesWithNestedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getSingleTitle = async (req, res) => {
    try {
        const page = await prisma.Title.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        res.json(page);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.saveTitle = async (req, res) => {
    const { title, content, index } = req.body;
    try {
        const page = await prisma.Title.create({
            data: {
                title,
                content,
                index
            },
        });
        res.json(page);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
};

exports.updateTitle = async (req, res) => {
    const pageId = Number(req.params.id);
    try {
        const existingTitle = await prisma.Title.findUnique({ where: { id: pageId } });

        if (!existingTitle) {
            return res.status(404).json({ error: 'Category_Title not found' });
        }

        // Update page with new data
        const updatedTitle = await prisma.Title.update({
            where: { id: pageId },
            data: {
                title: req.body.title,
                content: req.body.content,
            },
        });
        res.json(updatedTitle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteTitle = async (req, res) => {
    try {
        const page = await prisma.Title.delete({
            where: {
                id: Number(req.params.id),
            }
        });
        res.json(page);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};



// const path = require("path");
// const user = require("../models/users.model");
// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();
// exports.getTitle = async (req, res) => {
//     const page = await prisma.Category_Title.findMany({
//         include: {
//             Category_Subtitle: {
//                 include: {
//                     Category_Subtitle_Pages: {
//                         include: {
//                             Category_Subtitle_Subpages: {
//                                 include: {
//                                     Category_Subsequence: true
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     });
//     res.json(page)

// }



// exports.getSingleTitle = async (req, res) => {
//     const page = await prisma.Category_Title.findUnique({
//         where: {
//             id: Number(req.params.id),
//         },
//     })
//     res.json(page)
// }

// exports.saveTitle = async (req, res) => {
//     const { title, content, index } = req.body;
//     try {
//         const page = await prisma.Category_Title.create({
//             data: {
//                 title,
//                 content,
//                 index
//             },
//         });
//         res.json(page);
//     } catch (error) {
//         res.status(500).json({ error: "Database error" });
//     }
// };


// exports.updateTitle = async (req, res) => {
//     const pageId = Number(req.params.id);
//     try {
//         const existingTitle = await prisma.Category_Title.findUnique({ where: { id: pageId } });

//         if (!existingTitle) {
//             return res.status(404).json({ error: 'Title not found' });
//         }
//         // Update page with new image
//         const updatedTitle = await prisma.Thana.update({
//             where: { id: pageId },
//             data: {
//                 title: req.body.title,
//                 content: req.body.content,
//             },
//         });
//         res.json(updatedTitle);


//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// exports.deleteTitle = async (req, res) => {
//     const page = await prisma.Category_Title.delete({
//         where: {
//             id: Number(req.params.id),
//         }
//     })
//     res.json(page)
// }