import { z } from 'zod';

export const createStoreSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Name is required' })
        .max(100, { message: 'Name must not exceed 100 characters.' }),
    description: z
        .string()
        .max(65535, {
            message: 'Description must not exceed 65535 characters.',
        })
        .optional(),
    image: z
        .string()
        // .url({ message: 'Image must be a valid URL.' })
        .max(255, { message: 'Image URL must not exceed 255 characters.' })
        .optional(),
    bank_name: z
        .string()
        .max(100, { message: 'Bank name must not exceed 100 characters.' })
        .optional(),
    bank_account: z
        .string()
        .max(50, { message: 'Bank account must not exceed 50 characters.' })
        .optional(),
    bank_holder: z
        .string()
        .max(100, { message: 'Bank holder must not exceed 100 characters.' })
        .optional(),
});

export const updateStoreSchema = createStoreSchema.partial();
