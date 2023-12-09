const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create a root menu item
exports.createMenu = async (req, res) => {
    const rootMenu = await prisma.Menu.create({
        data: {
            title: 'Root Menu Item',
        },
    });
    res.json(rootMenu);
}

// Create submenus under the root menu
exports.createSubMenu1 = async (req, res) => {
    const subMenu1 = await prisma.Menu.create({
        data: {
            title: 'Submenu 1',
            parentId: rootMenu.id,
        },
    });
    res.json(subMenu1)
}

exports.createSubMenu2 = async (req, res) => {
    subMenu2 = await prisma.Menu.create({
        data: {
            title: 'Submenu 2',
            parentId: rootMenu.id,
        },
    });
    res.json(subMenu2)
}

// Get all menus and submenus
exports.getAllMenuTitle = async (req, res) => {
    const allMenus = await prisma.Menu.findMany({
        include: {
            children: true,
        },
    });
    res.json(allMenus)
    console.log('All Menus:', allMenus);
}




// Query the root menu with its submenus
exports.getSingleMenu = async (req, res) => {
    const menuWithSubmenus = await prisma.Menu.findUnique({
        where: {
            id: rootMenu.id,
        },
        include: {
            children: true,
        },
    });
    res.json(menuWithSubmenus);
    console.log('Menu with Submenus:', menuWithSubmenus);
}



exports.editMenu = async (req, res) => {
    const updatedMenu = await prisma.Menu.update({
        where: {
            id: rootMenu.id,
        },
        data: {
            title: 'Updated Root Menu',
        },
    });
    res.json(updatedMenu)
    console.log('Updated Menu:', updatedMenu);
}

// Delete the root menu and its submenus
exports.deleteMenuTitle = async (req, res) => {
    const deletedMenu = await prisma.Menu.delete({
        where: {
            id: rootMenu.id,
        },
    });
    res.json(deletedMenu)
    console.log('Deleted Menu:', deletedMenu);
}



