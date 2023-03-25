// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { StatusCodes } from 'http-status-codes';

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      console.log('data:', req.body);
      res.status(StatusCodes.OK).json({ success: true, msg: 'Form submitted successfully' });
      break;
    default:
      res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ success: false, error: 'Method not allowed' });
  }
}
