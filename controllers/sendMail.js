import { transporter } from "../transporter.js";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = (req, res) => {
  if (!req.body.firstName || !req.body.email || !req.body.message)
    return res.status(400).json("Wystąpił błąd");

  let message = `
    Nadawca: ${req.body.firstName} ${req.body.lastName}
    Adres e-mail: ${req.body.email}
    Numer tel: ${req.body.phone}
    ${req.body.message}
    Wiadomość wygenerowana automatycznie
    `;
  let data = {
    from: process.env.PERSONAL_EMAIL,
    to: process.env.PERSONAL_EMAIL,
    subject: "Wiadomość wygenerowana automatycznie",
    text: message,
  };
  transporter.sendMail(data, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Wiadomość wysłana pomyślnie.");
  });
};
