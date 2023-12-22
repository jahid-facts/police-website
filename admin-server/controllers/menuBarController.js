const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createMenuTitle = async (req, res) => {

    try {
        const newMenu = await prisma.menu.create({
            data: {
                title: req.body.title,
                parentId: req.body.parentId,
            },
        });
        res.json(newMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getAllMenuTitles = async (req, res) => {
    try {
        const menus = await prisma.menu.findMany();
        res.json(menus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getSingleMenuTitle = async (req, res) => {
    try {
        const menu = await prisma.menu.findUnique({
            where: { id: parseInt(req.params.id) },
        });

        if (!menu) {
            res.status(404).json({ error: 'Menu not found' });
            return;
        }

        res.json(menu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.editMenuTitle = async (req, res) => {
    try {
        const updatedMenu = await prisma.menu.update({
            where: { id: parseInt(req.params.id) },
            data: {
                title: req.body.title,
                parentId: req.body.parentId,
            },
        });
        res.json(updatedMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteMenuTitle = async (req, res) => {

    try {
        await prisma.menu.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.json({ message: 'Menu deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// exports.deleteMenuTitle = async (req, res) => {
//     try {
//       const menuId = parseInt(req.params.id);

//       // Delete associated dynamic menus
//       await prisma.dynamic_Menu.deleteMany({
//         where: { menuId: menuId },
//       });

//       // Now, you can safely delete the menu item
//       await prisma.menu.delete({
//         where: { id: menuId },
//       });

//       res.json({ message: 'Menu deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };



// Create Dynamic_Menu
exports.createSubTitle = async (req, res) => {

    try {
        const { title } = req.body;
        const { titleId } = req.params;

        const dynamicMenu = await prisma.dynamic_Menu.create({
            data: {
                title: title,
                menu: {
                    connect: { id: parseInt(titleId, 10) }
                }
            }
        });

        res.json(dynamicMenu);
        console.log(dynamicMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    // try {
    //     const { title, menu_id } = req.body;

    //     // Assuming that the menuId is provided in the request body
    //     const dynamicMenu = await prisma.dynamic_Menu.create({
    //         data: {
    //             title: title,
    //             menu: {
    //                 connect: { id: menu_id }
    //             }
    //         }
    //     });

    //     res.json(dynamicMenu);
    //     console.log(dynamicMenu);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
}


// Assuming the subtitle model has a reference to the menu title
exports.getSubtitlesByTitle = async (req, res) => {

    // try {
    //     const subtitles = await prisma.dynamic_Menu.findMany({
    //         where: {
    //             menu: { // Reference the menu relationship
    //                 id: parseInt(req.params.titleId),
    //             },
    //         },
    //     });

    //     res.json(subtitles);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }

    try {
        const subtitles = await prisma.dynamic_Menu.findMany({
            // where: { menuTitleId: parseInt(req.params.titleId) },
            where: { menu_id: parseInt(req.params.titleId) },
        });

        res.json(subtitles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Get all menus and submenus
exports.getAllSubTitle = async (req, res) => {

    // try {
    //     const { titleId } = req.params;

    //     const dynamicMenus = await prisma.dynamic_Menu.findMany({
    //         where: {
    //             menu: {
    //                 id: parseInt(titleId, 10)
    //             }
    //         }
    //     });

    //     res.json(dynamicMenus);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }

    try {
        const dynamicMenus = await prisma.dynamic_Menu.findMany();
        res.json(dynamicMenus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// Query the root menu with its submenus
exports.getSingleSubTitle = async (req, res) => {
    try {
        const dynamicMenu = await prisma.dynamic_Menu.findUnique({
            where: { id: parseInt(req.params.id) },
        });

        if (!dynamicMenu) {
            res.status(404).json({ error: 'Dynamic Menu not found' });
            return;
        }

        res.json(dynamicMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



exports.editSubTitle = async (req, res) => {
    try {
        const updatedDynamicMenu = await prisma.dynamic_Menu.update({
            where: { id: parseInt(req.params.id) },
            data: {
                title: req.body.title,
                // menu: { connect: { id: req.body.menuId } },
                menu: { connect: { id: req.body.menu_id } },
            },
        });
        res.json(updatedDynamicMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Delete the root menu and its submenus
exports.deleteSubTitle = async (req, res) => {
    try {
        await prisma.dynamic_Menu.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.json({ message: 'Dynamic Menu deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}






// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();

// exports.createMenuTitle = async (req, res) => {

//     try {
//         const createdMenu = await prisma.Menu.create({
//             data: {
//                 title: req.body.title,
//                 dynamicMenus: {
//                     create: req.body.Dynamic_Menu?.map(subTitle => ({
//                         title: subTitle.title,
//                         dynamicMenus: {
//                             create: subTitle.Dynamic_Menu?.map(subSubMenu => ({
//                                 title: subSubMenu.title,
//                                 // other fields...
//                             })),
//                         },
//                     })),
//                 },
//             },
//         });
//         res.json(createdMenu);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }




//     // try {
//     //     const createdMenu = await prisma.Menu.create({
//     //         data: {
//     //             title: req.body.title,
//     //             // other fields...
//     //             Dynamic_Menu: {
//     //                 create: req.body.Dynamic_Menu?.map(subTitle => ({
//     //                     title: subTitle.title,
//     //                     // other fields...
//     //                     Dynamic_Menu: {
//     //                         create: subTitle.Dynamic_Menu?.map(subSubMenu => ({
//     //                             title: subSubMenu.title,
//     //                             // other fields...
//     //                         })),
//     //                     },
//     //                 })),
//     //             },
//     //         },
//     //     });
//     //     res.json(createdMenu);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Internal Server Error' });
//     // }


//     // try {
//     //     const { title, parentId, subtitle } = req.body;

//     //     // Create menu with subtitles
//     //     const menu = await prisma.Menu.create({
//     //         data: {
//     //             title,
//     //             parentId,
//     //             dynamicMenus: subtitle ? { create: [{ title: subtitle }] } : undefined,

//     //             // subtitles: subtitle ? { create: [{ title: subtitle }] } : undefined,
//     //         },
//     //         include: {
//     //             // subtitles: true,
//     //             dynamicMenus: true,
//     //         },
//     //     });

//     //     res.json(menu);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Internal server error' });
//     // }

//     // try {
//     //     const { title, parentId } = req.body;
//     //     const menu = await prisma.Menu.create({
//     //         data: { title, parentId },
//     //     });
//     //     res.json(menu);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Internal server error' });
//     // }


//     // try {
//     //     const { title } = req.body;
//     //     const menu = await prisma.menu.create({
//     //         data: {
//     //             title,
//     //         },
//     //     });
//     //     res.json(menu);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Internal server error' });
//     // }

//     // try {
//     //     const { title, parentId } = req.body;
//     //     const menu = await prisma.Menu.create({
//     //         data: { title, parentId },
//     //     });
//     //     res.json(menu);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Internal server error' });
//     // }


//     //     try {
//     //         const { title } = req.body;
//     //         const menu = await prisma.menu.create({
//     //             data: {
//     //                 title,
//     //             },
//     //         });
//     //         res.json(menu);
//     //         console.log(menu)
//     //     } catch (error) {
//     //         console.error(error);
//     //         res.status(500).json({ error: 'Internal server error' });
//     //     }
//     };

//     // exports.createSubMenuTitle = async (req, res) => {

//     // try {
//     //     const { menu_id } = req.params;
//     //     const { title } = req.body;

//     //     const subMenu = await prisma.Dynamic_Menu.create({
//     //         data: {
//     //             title,
//     //             menu_id: parseInt(menu_id),
//     //         },
//     //     });

//     //     res.json(subMenu);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Internal server error' });
//     // }



//     // try {
//     //     const { menu_id } = req.params;
//     //     const { title } = req.body;

//     //     const subMenu = await prisma.Dynamic_Menu.create({
//     //         data: {
//     //             title,
//     //             menu_id: parseInt(menu_id),
//     //         },
//     //     });

//     //     res.json(subMenu);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Internal server error' });
//     // }

//     // try {
//     //     const { title } = req.body;
//     //     const subtitle = await prisma.Dynamic_Menu.create({
//     //         data: {
//     //             title,
//     //             menu_id: req.params.menu_id, // assuming you pass the menuId in the request params
//     //         },
//     //     });

//     //     res.json(subtitle);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Internal server error' });
//     // }
//     // }

//     exports.getAllMenuTitles = async (req, res) => {
//         try {
//             const menus = await prisma.Menu.findMany();
//             res.json(menus);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Internal server error' });
//         }

//         // try {
//         //     const menus = await prisma.Menu.findMany({
//         //         include: {
//         //             Dynamic_Menu: true, // Include the dynamic menus associated with each menu
//         //         },
//         //     });
//         //     res.json(menus);
//         // } catch (error) {
//         //     console.error(error);
//         //     res.status(500).json({ error: 'Internal server error' });
//         // }
//     };

//     exports.getSingleMenuTitle = async (req, res) => {
//         try {
//             const { id } = req.params;
//             const menu = await prisma.Menu.findUnique({
//                 where: { id: parseInt(id) },
//             });
//             if (!menu) {
//                 return res.status(404).json({ error: 'Menu not found' });
//             }
//             res.json(menu);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     };

//     exports.editMenuTitle = async (req, res) => {
//         try {
//             const { id } = req.params;
//             const { title, parentId } = req.body;
//             const updatedMenu = await prisma.Menu.update({
//                 where: { id: parseInt(id) },
//                 data: { title, parentId },
//             });
//             res.json(updatedMenu);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     };

//     exports.deleteMenuTitle = async (req, res) => {
//         try {
//             const { id } = req.params;
//             await prisma.Menu.delete({
//                 where: { id: parseInt(id) },
//             });
//             res.json({ message: 'Menu deleted successfully' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     };
