import nodemailer from 'nodemailer';

export async function sendEmail(mailOptions) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_EMAIL_PW,
    },
    debug: false,
    logger: false,
  });

  return transporter.sendMail(mailOptions);
}
