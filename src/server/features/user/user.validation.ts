import { z } from 'zod';
import { UserRole } from '@prisma/client';

const allowedEmailProviders: string[] = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
];

export const updateUserSchema = z.object({
    username: z.string().optional(),
    name: z
        .string()
        .min(1, { message: 'Name is required.' })
        .trim()
        .toLowerCase()
        .optional(),
    email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Please enter a valid email address.' })
        .trim()
        .toLowerCase()
        .refine(
            email => {
                const domain = email.split('@')[1];
                return allowedEmailProviders.includes(domain!);
            },
            { message: 'Please enter a valid email provider.' },
        )
        .optional(),
    phone: z.string().min(1).max(20).optional(),
    role: z.nativeEnum(UserRole).optional(),
    provider: z.string().optional(),
    store_id: z.string().optional(),
    image: z.string().optional(),
});
