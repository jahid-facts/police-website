const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create a new Subtitle_Pages
exports.createSubtitlePages = async (req, res) => {
    try {
        const { title, subtitleId, index, status } = req.body;
        const newSubtitlePages = await prisma.Subtitle_Pages.create({
            data: {
                title,
                subtitleId,
                index,
                status,
            },
        });
        res.json(newSubtitlePages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get all Subtitle_Pages
exports.getAllSubtitlePages = async (req, res) => {
    try {
        const subtitlePages = await prisma.Subtitle_Pages.findMany({
            include: {
                subtitle: true, // Include the associated Subtitle
                subpages: true, // Include the associated Subtitle_Subpages
            },
        });
        res.json(subtitlePages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get a single Subtitle_Pages by ID
exports.getSingleSubtitlePages = async (req, res) => {
    try {
        const subtitlePagesId = Number(req.params.id);
        const subtitlePages = await prisma.Subtitle_Pages.findUnique({
            where: { id: subtitlePagesId },
            include: {
                subtitle: true,
                subpages: true,
            },
        });

        if (!subtitlePages) {
            return res.status(404).json({ error: "Subtitle_Pages not found" });
        }

        res.json(subtitlePages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update a Subtitle_Pages by ID
exports.updateSubtitlePages = async (req, res) => {
    try {
        const subtitlePagesId = Number(req.params.id);
        const { title, index, status } = req.body;

        const existingSubtitlePages = await prisma.Subtitle_Pages.findUnique({
            where: { id: subtitlePagesId },
        });

        if (!existingSubtitlePages) {
            return res.status(404).json({ error: "Subtitle_Pages not found" });
        }

        const updatedSubtitlePages = await prisma.Subtitle_Pages.update({
            where: { id: subtitlePagesId },
            data: {
                title,
                index,
                status,
            },
        });

        res.json(updatedSubtitlePages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Delete a Subtitle_Pages by ID
exports.deleteSubtitlePages = async (req, res) => {
    try {
        const subtitlePagesId = Number(req.params.id);
        const deletedSubtitlePages = await prisma.Subtitle_Pages.delete({
            where: { id: subtitlePagesId },
        });
        res.json(deletedSubtitlePages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
