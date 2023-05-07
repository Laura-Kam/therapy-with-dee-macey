// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendEmail } from '@/utils/sendEmail';
import { StatusCodes } from 'http-status-codes';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const { name, email, phoneNumber, message } = req.body;

      const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: `Inquiry: New message from ${email}`,
        text: `Message from ${name}\nemail: ${email}\nphone number: ${phoneNumber}\n\nmessage: ${message}`,
      };

      try {
        await sendEmail(mailOptions);
        return res.status(StatusCodes.OK).json({ success: true, msg: 'Email sent successfully' });
      } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: 'There was an error' });
      }
    default:
      res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ success: false, error: 'Method not allowed' });
  }
}
