const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createMenuTitle = async (req, res) => {
    try {
        const { title, parentId } = req.body;
        const menu = await prisma.menu.create({
            data: { title, parentId },
        });
        res.json(menu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllMenuTitles = async (req, res) => {
    try {
        const menus = await prisma.menu.findMany();
        res.json(menus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getSingleMenuTitle = async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await prisma.menu.findUnique({
            where: { id: parseInt(id) },
        });
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.json(menu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.editMenuTitle = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, parentId } = req.body;
        const updatedMenu = await prisma.menu.update({
            where: { id: parseInt(id) },
            data: { title, parentId },
        });
        res.json(updatedMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteMenuTitle = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.menu.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Menu deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
