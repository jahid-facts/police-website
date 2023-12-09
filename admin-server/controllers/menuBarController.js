const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createMenuTitle = async (req, res) => {
    try {
        const data = await prisma.Dynamic_Menu.create({
            data: req.body
        });
        res.json(data);
    } catch (error) {
        console.error('Error creating title:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllMenuTitles = async (req, res) => {
    try {
        const data = await prisma.Dynamic_Menu.findMany({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching titles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getSingleMenuTitle = async (req, res) => {
    try {
        const data = await prisma.Dynamic_Menu.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        res.json(data);
    } catch (error) {
        console.error('Error fetching single title:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.editMenuTitle = async (req, res) => {
    try {
        const { title } = req.body;
        const data = await prisma.Dynamic_Menu.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                title,
            },
        });
        res.json(data);
    } catch (error) {
        console.error('Error editing title:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteMenuTitle = async (req, res) => {
    try {
        const data = await prisma.Dynamic_Menu.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        res.json(data);
    } catch (error) {
        console.error('Error deleting title:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
