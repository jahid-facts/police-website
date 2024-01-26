const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');

const prisma = new PrismaClient();

// Image upload configuration
const Storage = multer.diskStorage({
    destination: function (req, file, cv) {
        cv(null, "./public/uploads/");
    },
    filename: function (req, file, cv) {
        cv(null, Date.now() + "_" + file.originalname);
    }
});

const upload = multer({
    storage: Storage,
}).single("image");

// Get all Subsequences
exports.getSubsequences = async (req, res) => {
    const subsequences = await prisma.Subsequence.findMany({
        include: {
            // pages: true,
            subpages: true
        }
    });
    res.json(subsequences);
}

// Get a single Subsequence by ID
exports.getSingleSubsequence = async (req, res) => {
    const subsequence = await prisma.Subsequence.findUnique({
        where: {
            id: Number(req.params.id),
        },
    })
    res.json(subsequence);
}

// Save a new Subsequence
exports.saveSubsequence = async (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: "File upload error" });
        } else if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }

        const { subpagesId, title, image, index, status, content } = req.body;

        try {
            const subsequence = await prisma.Subsequence.create({
                data: {
                    subpagesId: Number(subpagesId),
                    title,
                    image: req?.file?.filename ? req?.file?.filename : null,
                    index,
                    status,
                    content,
                },
            });
            res.json(subsequence);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Database error" });
        }
    });
};

// Update an existing Subsequence
exports.updateSubsequence = async (req, res) => {
    const subsequenceId = Number(req.params.id);

    try {
        const existingSubsequence = await prisma.Subsequence.findUnique({ where: { id: subsequenceId } });

        if (!existingSubsequence) {
            return res.status(404).json({ error: 'Subsequence not found' });
        }

        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ error: "File upload error" });
            } else if (err) {
                return res.status(500).json({ error: "Internal server error" });
            }

            const newImage = req?.file;
            if (newImage && existingSubsequence.image) {
                const previousImagePath = path.join('public', 'uploads', existingSubsequence.image);
                try {
                    fs.unlinkSync(previousImagePath);
                } catch (error) {
                    console.log(error)
                }
            }

            // Update Subsequence with new image
            const { subpagesId, title, image, index, status, content } = req.body;
            const updatedSubsequence = await prisma.Subsequence.update({
                where: { id: subsequenceId },
                data: {
                    subpagesId: Number(subpagesId),
                    title,
                    image: newImage ? newImage.filename : existingSubsequence.image,
                    index,
                    status,
                    content,
                },
            });
            res.json(updatedSubsequence);
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a Subsequence
exports.deleteSubsequence = async (req, res) => {
    const subsequenceId = Number(req.params.id);

    try {
        const subsequence = await prisma.Subsequence.delete({
            where: {
                id: subsequenceId,
            },
        });

        if (subsequence.image) {
            const previousImagePath = path.join('public', 'uploads', subsequence.image);
            if (previousImagePath) {
                try {
                    fs.unlinkSync(previousImagePath);
                } catch (error) {
                    console.log(error)
                }
            }
        }

        res.json(subsequence);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
