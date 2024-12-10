import { z } from 'zod';

export const updateProfileSchema = z.object({
    username: z.string().min(1, 'min 1 karakter'),
    name: z.string(),
    email: z.string(),
    phone: z.string().optional(),
});

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;

export const updatePasswordSchema = z
    .object({
        password: z.string().min(1).min(8),
        new_password: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters long.' })
            .max(100, { message: 'Password must not exceed 100 characters.' })
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                {
                    message:
                        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
                },
            ),
        confirm_password: z
            .string()
            .min(1, { message: 'Please confirm your password.' }),
    })
    .refine(data => data.new_password === data.confirm_password, {
        message: 'Passwords do not match.',
        path: ['confirm_password'],
    });

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
