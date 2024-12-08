import { z } from 'zod';

export const resetPasswordSchema = z.object({
    password: z
        .string()
        .min(1, { message: 'Password is required.' })
        .min(8, { message: 'Password must be at least 8 characters long.' }),
    new_password: z
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
        ),
});
