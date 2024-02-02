const nodemailer = require("nodemailer");
const csvData = require("./csv");

const sendmail = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "sender@outlook.com",
      pass: "password",
    },
  });

  const data = csvData.csv;
  const buff = Buffer.from(data);
  const base64data = buff.toString("base64");

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <sender@outlook.com>',
    to: "recipient@outlook.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
    attachments: {
      filename: "data.csv",
      //path: "./test.txt",
      content: base64data,
      encoding: "base64",
    },
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = {
  sendmail,
};
