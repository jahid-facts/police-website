
const { PrismaClient } = require("@prisma/client");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const prisma = new PrismaClient();
const nodemailer = require("nodemailer");
exports.register = async (req, res) => {
  try {
    const { email, password, role_id, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      
        role_id: Number(role_id)
      },
    });
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while registering the user');
  }

}
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Assuming you have the user's ID as a route parameter
    const { email, password, role_id, name } = req.body;

    const updateData = {};

    if (name) {
      updateData.name = name;
    }

    if (email) {
      updateData.email = email;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    if (role_id) {
      updateData.role_id = Number(role_id);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: updateData,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while updating the user');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(404).send('User not found');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).send('Incorrect password');
  }
  delete user.password;
  res.status(200).json(user);

}

exports.getUser = async (req, res) => {
  const user = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      permissions_module: true,
      phone: true,
      image: true,
      role: {
        select: {
          role: true,
          user: true,
          service: true,
          administration: true,
          home_page: true
        }
      }
    }
  });
  delete user.password;
  res.json(user)

}
exports.getSingleUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        role: {
          select: {
            role: true,
            user: true,
            service: true,
            administration: true,
            home_page: true
          }
        }
      }
    });
    delete user.password;
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
}
exports.deleteUser = async (req, res) => {
  const user = await prisma.user.delete({
    where: {
      id: Number(req.params.id),
    }
  })
  res.json(user)
}

exports.changePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(404).send('User not found');
  }

  // Check if the provided old password matches the stored hashed password
  const passwordMatch = await bcrypt.compare(oldPassword, user.password);
  if (!passwordMatch) {
    return res.status(401).send('Incorrect old password');
  }

  // Hash the new password
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  // Update the user's password in the database
  await prisma.user.update({
    where: { email },
    data: {
      password: hashedNewPassword,
    },
  });

  res.status(200).send('Password changed successfully');
};

exports.resetPasswordRequest = async (req, res) => {
  const { email } = req.body;
  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    return res.status(404).send('User not found');
  }
  const token = crypto.randomBytes(3).toString('hex').toUpperCase();
  // email for the user to send reset token
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "dev.arafat.zaimahtech@gmail.com",
      pass: "syopjokuxbqbjbic",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Kishoreganj Police" <dev.arafat.zaimahtech@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "Reset Password Token", // Subject line
      text: `Dear user your token is ${token}`, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });
    await prisma.Reset_Token.create({
      data: {
        email: email,
        token: token,
        expiration_time: Date.now() + 1000 * 60 * 5
      },
    })
    res.status(200).send('Email sent successfully');
  }
  main().catch(console.error);
}

// Route to handle the password reset form submission
exports.resetPassword = async (req, res) => {
  const { newPassword, token, email } = req.body;
  // Find the password reset token in the database
  const resetToken = await prisma.Reset_Token.findFirst({
    orderBy: {
      id: 'desc',
    },
    where: { email: email },

  });

  if (!resetToken || resetToken.expiration_time > Date.now() || resetToken.token !== token) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  // Hash the new password
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);
  // Update the user's password in the database
  
  await prisma.user.update({
    where: { email: resetToken.email },
    data: {
      password: hashedNewPassword,
    },
  });

  // Delete the used reset token
  await prisma.Reset_Token.delete({
    where: { id: resetToken.id },
  });
  return res.status(200).json({ token: resetToken, message: 'Password reset successful' });
};