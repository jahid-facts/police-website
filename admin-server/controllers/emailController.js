
const nodemailer = require("nodemailer");
exports.sendEmail = async (req, res) => {

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
      to: req.body.office, // list of receivers
      cc: req.body.email,
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    res.status(200).send('Email sent successfully');
  }

  main().catch(console.error);

}
