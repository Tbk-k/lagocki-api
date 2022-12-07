import nodeMailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodeMailer.createTransport({
  host: "kamil-lagocki.atthost24.pl",
  port: 465,
  secure: true,
  auth: {
    user: process.env.PERSONAL_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});
