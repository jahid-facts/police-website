const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create a root menu item
exports.createMenu = async (req, res) => {
    try {
        const { title, menu_id } = req.body;
        const dynamicMenu = await prisma.dynamic_Menu.create({
            data: {
                title,
                menu: { connect: { id: menu_id } }, // Provide the menu_id to connect to the associated Menu
            },
        });
        res.json(dynamicMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Get all menus and submenus
exports.getAllMenuTitle = async (req, res) => {
    try {
        const dynamicMenus = await prisma.dynamic_Menu.findMany();
        res.json(dynamicMenus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}




// Query the root menu with its submenus
exports.getSingleMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const dynamicMenu = await prisma.dynamic_Menu.findUnique({
            where: { id: parseInt(id) },
        });

        if (!dynamicMenu) {
            return res.status(404).json({ error: 'Dynamic_Menu not found' });
        }

        res.json(dynamicMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



exports.editMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, menu_id } = req.body;

        const updatedDynamicMenu = await prisma.dynamic_Menu.update({
            where: { id: parseInt(id) },
            data: { title, menu_id },
        });

        res.json(updatedDynamicMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Delete the root menu and its submenus
exports.deleteMenuTitle = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.dynamic_Menu.delete({
            where: { id: parseInt(id) },
        });

        res.json({ message: 'Dynamic_Menu deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



