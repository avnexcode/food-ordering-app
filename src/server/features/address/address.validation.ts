import { z } from 'zod';

export const createAddressSchema = z.object({
    street: z.string().max(100, 'Street must be at most 100 characters long'),
    village: z.string().max(100, 'Village must be at most 100 characters long'),
    district: z
        .string()
        .max(100, 'District must be at most 100 characters long'),
    city: z.string().max(100, 'City must be at most 100 characters long'),
    province: z
        .string()
        .max(100, 'Province must be at most 100 characters long'),
    country: z
        .string()
        .max(100, 'Country must be at most 100 characters long')
        .nullable()
        .optional(),
    postal_code: z
        .string()
        .max(10, 'Postal code must be at most 10 characters long')
        .nullable()
        .optional(),
    description: z
        .string()
        .max(255, 'Description must be at most 255 characters long')
        .nullable()
        .optional(),
    user_id: z.string().nullable().optional(),
});

export const updateAddressSchema = createAddressSchema.partial();
