import { z } from 'zod';

export const MessageSchema = z.object({
  name: z.string().min(1, 'min 1 character').max(30, 'max 30 characters'),
  email: z.string().email('email required'),
  phoneNumber: z.string().regex(new RegExp(/^(07\d{8,12}|447\d{7,11})$/g), 'valid phone number required'),
  message: z.string().min(1, 'min 1 character'),
});
