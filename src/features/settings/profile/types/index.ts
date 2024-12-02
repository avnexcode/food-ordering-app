import { z } from 'zod';

export const updateProfileSchema = z.object({
    username: z.string(),
    name: z.string(),
    email: z.string(),
});

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;

export const updatePasswordSchema = z.object({
    password: z.string(),
    new_password: z.string(),
    new_password_confirm: z.string(),
});

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
