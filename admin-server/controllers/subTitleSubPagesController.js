const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');
const prisma = new PrismaClient();

// Image upload configuration
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

const upload = multer({
    storage: Storage,
}).single("image");

exports.getSubtitleSubpages = async (req, res) => {
    try {
        const subtitleSubpages = await prisma.Subtitle_Subpages.findMany({
            include: {
                subsequence: true
            }
        });
        res.json(subtitleSubpages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getSingleSubtitleSubpage = async (req, res) => {
    try {
        const subtitleSubpage = await prisma.Subtitle_Subpages.findUnique({
            where: {
                id: Number(req.params.id),
            },
            include: {
                subsequence: true
            }
        });
        res.json(subtitleSubpage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.saveSubtitleSubpage = async (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: "File upload error" });
        } else if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }

        // const { pagesId, name, designation, mobile, phone, bcs_batch, location, image, address, current_address, office, fax, email, from_date, to_date, index, status, content } = req.body;

        const { pagesId, name, designation, mobile, phone, bcs_batch, location, address, current_address, office, fax, email, from_date, to_date, index, status } = req.body;
        const image = req?.file?.filename ? req?.file?.filename : null;

        try {
            const subtitleSubpage = await prisma.Subtitle_Subpages.create({
                data: {
                    pagesId: Number(pagesId),
                    name,
                    designation,
                    mobile,
                    phone,
                    bcs_batch,
                    location,
                    // image: req?.file?.filename ? req?.file?.filename : null,
                    image,
                    address,
                    current_address,
                    office,
                    fax,
                    email,
                    from_date,
                    to_date,
                    index,
                    status,
                    // content,
                },
                include: {
                    subsequence: true
                }
            });
            res.json(subtitleSubpage);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Database error" });
        }
    });
};

exports.updateSubtitleSubpage = async (req, res) => {
    const subtitleSubpageId = Number(req.params.id);

    try {
        const existingSubtitleSubpage = await prisma.Subtitle_Subpages.findUnique({ where: { id: subtitleSubpageId } });

        if (!existingSubtitleSubpage) {
            return res.status(404).json({ error: 'Subtitle_Subpage not found' });
        }

        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ error: "File upload error" });
            } else if (err) {
                return res.status(500).json({ error: "Internal server error" });
            }

            const newImage = req?.file;
            if (newImage && existingSubtitleSubpage.image) {
                const previousImagePath = path.join('public', 'uploads', existingSubtitleSubpage.image);
                try {
                    fs.unlinkSync(previousImagePath);
                } catch (error) {
                    console.log(error)
                }
            }

            // const { pagesId, name, designation, mobile, phone, bcs_batch, location, image, address, current_address, office, fax, email, from_date, to_date, index, status, content } = req.body;

            const { pagesId, name, designation, mobile, phone, bcs_batch, location, address, current_address, office, fax, email, from_date, to_date, index, status } = req.body;
            // const image = req?.file?.filename ? req?.file?.filename : null;

            const updatedSubtitleSubpage = await prisma.Subtitle_Subpages.update({
                where: { id: subtitleSubpageId },
                data: {
                    pagesId: Number(pagesId),
                    name,
                    designation,
                    mobile,
                    phone,
                    bcs_batch,
                    location,
                    image: newImage ? newImage.filename : existingSubtitleSubpage.image,
                    // image,
                    address,
                    current_address,
                    office,
                    fax,
                    email,
                    from_date,
                    to_date,
                    index,
                    status,
                    // content,
                },
                include: {
                    subsequence: true
                }
            });

            res.json(updatedSubtitleSubpage);
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteSubtitleSubpage = async (req, res) => {
    const subtitleSubpageId = Number(req.params.id);

    try {
        const subtitleSubpage = await prisma.Subtitle_Subpages.delete({
            where: {
                id: subtitleSubpageId,
            },
            include: {
                subsequence: true
            }
        });

        if (subtitleSubpage.image) {
            const previousImagePath = path.join('public', 'uploads', subtitleSubpage.image);
            if (previousImagePath) {
                try {
                    fs.unlinkSync(previousImagePath);
                } catch (error) {
                    console.log(error)
                }
            }
        }

        res.json(subtitleSubpage);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
