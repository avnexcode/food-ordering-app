import { z } from 'zod';

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
    role: z.string().optional(),
    provider: z.string().optional(),
    token: z.string().optional(),
    password: z
        .string()
        .min(1, { message: 'Password is required.' })
        .min(8, { message: 'Password must be at least 8 characters long.' })
        .max(100, { message: 'Password must not exceed 100 characters.' })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            {
                message:
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
            },
        )
        .optional(),
    store_id: z.string().optional(),
    image: z.string().optional(),
});
