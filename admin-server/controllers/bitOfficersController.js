
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require('fs');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
exports.getBitOfficers = async (req, res) => {
  const bitOfficer = await prisma.Bit_Officers.findMany({
    include: {
      thana: true,
      bitNews: true
    }

  });
  res.json(bitOfficer)
  // console.log(bitOfficer)
}

exports.getTotalBitOfficers = async (req, res) => {

  try {
    const bitOfficerCount = await prisma.Bit_Officers.count();
    res.json({ bitOfficerCount });
    console.log(bitOfficerCount)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


exports.getBitOfficersOnly = async (req, res) => {
  const bitOfficer = await prisma.Bit_Officers.findMany({});
  res.json(bitOfficer)
}

// image upload
var Storage = multer.diskStorage({
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

exports.getSingleBitOfficers = async (req, res) => {
  const bitOfficer = await prisma.Bit_Officers.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      thana: true,
      bitNews: true
    }
  })
  res.json(bitOfficer)
}

exports.saveBitOfficers = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }


    const { name, email, fax, address, current_address, location, mobile, phone, thanaId, designation } = req.body;
    const image = req?.file?.filename ? req?.file?.filename : null;

    try {
      const bitOfficer = await prisma.Bit_Officers.create({
        data: {
          name,
          email,
          fax,
          address,
          current_address,
          location,
          mobile,
          phone,
          thanaId: Number(thanaId),
          designation,
          image,
        },
      });
      // const role = await prisma.Role.findUnique({
      //   where: {
      //     role: "Bit Police"
      //   }
      // })
      // const hashedPassword = await bcrypt.hash(mobile, 10);
      // const user = await prisma.User.create({
      //   data: {
      //     name,
      //     email: mobile,
      //     password: hashedPassword,
      //     role_id: role.id,
      //     permissions: bitOfficer.id?.toString(),
      //     permissions_module: "BitPolice"
      //   },
      // })
      res.json(bitOfficer);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "Database error" });
    }
  });
};


exports.updateBitOfficers = async (req, res) => {
  const bitOfficerId = Number(req.params.id);
  try {
    const existingBitOfficers = await prisma.Bit_Officers.findUnique({ where: { id: bitOfficerId } });

    if (!existingBitOfficers) {
      return res.status(404).json({ error: 'BitOfficers not found' });
    }

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: "File upload error" });
      } else if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      const newImage = req?.file;
      if (newImage && existingBitOfficers.image) {
        const previousImagePath = path.join('public', 'uploads', existingBitOfficers.image);
        try {
          fs.unlinkSync(previousImagePath);
        } catch (error) {
          console.log(error)
        }
      }

      // Update bitOfficer with new image
      const { name, email, fax, address, current_address, location, mobile, phone, thanaId, designation, } = req.body;
      const updatedBitOfficers = await prisma.Bit_Officers.update({
        where: { id: bitOfficerId },
        data: {
          name,
          email,
          fax,
          address,
          current_address,
          location,
          mobile,
          phone,
          thanaId: Number(thanaId),
          designation,
          image: newImage ? newImage.filename : existingBitOfficers.image,
        },
      });
      res.json(updatedBitOfficers);
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteBitOfficers = async (req, res) => {
  const bitOfficer = await prisma.Bit_Officers.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  if (bitOfficer.image) {
    const previousImagePath = path.join('public', 'uploads', bitOfficer.image);
    if (previousImagePath) {
      try {
        fs.unlinkSync(previousImagePath);
      } catch (error) {
        console.log(error)
      }
    }
  }
  res.json(bitOfficer)
}
