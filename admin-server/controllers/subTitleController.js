const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create a new Category_Subtitle
exports.createSubtitle = async (req, res) => {

    // try {
    //     const { title, titleId, index } = req.body;

    //     // Check if the specified titleId exists in the Title table
    //     const existingTitle = await prisma.Title.findUnique({
    //         where: { id: titleId },
    //     });

    //     if (!existingTitle) {
    //         return res.status(404).json({ error: 'Title not found' });
    //     }

    //     const newSubtitle = await prisma.Subtitle.create({
    //         data: {
    //             title,
    //             titleId,
    //             index,
    //         },
    //     });

    //     res.json(newSubtitle);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal server error' });
    // }

    try {
        // const { title, titleId, index, status } = req.body;
        const { title, titleId, index } = req.body;
        const newSubtitle = await prisma.Subtitle.create({
            data: {
                title,
                titleId,
                index,
                // status,
            },
        });
        res.json(newSubtitle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get all Category_Subtitles
exports.getAllSubtitles = async (req, res) => {
    try {
        const subtitles = await prisma.Subtitle.findMany({
            include: {
                titles: true, // Include the associated Category_Title
                pages: true, // Include the associated Category_Subtitle_Pages
            },
        });
        res.json(subtitles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get a single Category_Subtitle by ID
exports.getSingleSubtitle = async (req, res) => {
    try {
        const subtitleId = Number(req.params.id);
        const subtitle = await prisma.Subtitle.findUnique({
            where: { id: subtitleId },
            include: {
                titles: true,
                pages: true,
            },
        });

        if (!subtitle) {
            return res.status(404).json({ error: "Category_Subtitle not found" });
        }

        res.json(subtitle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update a Category_Subtitle by ID
exports.updateSubtitle = async (req, res) => {
    try {
        const subtitleId = Number(req.params.id);
        const { title, index, status } = req.body;

        const existingSubtitle = await prisma.Subtitle.findUnique({
            where: { id: subtitleId },
        });

        if (!existingSubtitle) {
            return res.status(404).json({ error: "Category_Subtitle not found" });
        }

        const updatedSubtitle = await prisma.Subtitle.update({
            where: { id: subtitleId },
            data: {
                title,
                index,
                status,
            },
        });

        res.json(updatedSubtitle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Delete a Category_Subtitle by ID
exports.deleteSubtitle = async (req, res) => {
    try {
        const subtitleId = Number(req.params.id);
        const deletedSubtitle = await prisma.Subtitle.delete({
            where: { id: subtitleId },
        });
        res.json(deletedSubtitle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
