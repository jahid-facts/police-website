const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createTitle = async (req, res) => {
    try {
        const data = await prisma.dynamic_links.create({
            data: req.body
        });
        res.json(data);
    } catch (error) {
        console.error('Error creating title:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllTitles = async (req, res) => {
    try {
        const data = await prisma.dynamic_links.findMany({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching titles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getSingleTitle = async (req, res) => {
    try {
        const data = await prisma.dynamic_links.findUnique({
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

exports.editTitle = async (req, res) => {
    try {
        const { title } = req.body;
        const data = await prisma.dynamic_links.update({
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

exports.deleteTitle = async (req, res) => {
    try {
        const data = await prisma.dynamic_links.delete({
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
