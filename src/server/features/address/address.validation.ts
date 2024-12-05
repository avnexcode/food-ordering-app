import { z } from 'zod';

export const createAddressSchema = z.object({
    label: z
        .string()
        .min(1, { message: 'Label is required' })
        .max(50, { message: 'Label must not exceed 50 characters.' }),
    street: z
        .string()
        .min(1, { message: 'Street is required' })
        .max(100, { message: 'Street must not exceed 100 characters.' }),
    village_id: z.string(),
    district_id: z.string(),
    city_id: z.string(),
    province_id: z.string(),
    country: z
        .string()
        .max(100, { message: 'Country must not exceed 100 characters.' })
        .optional(),
    postal_code: z
        .string()
        .max(10, { message: 'Postal code must not exceed 10 characters.' })
        .optional(),
    description: z
        .string()
        .max(150, { message: 'Description must not exceed 150 characters.' })
        .optional(),
    is_default: z.boolean({ message: 'Is default must be a boolean.' }),
    user_id: z
        .string({ message: 'User ID must be a valid string.' })
        .optional(),
    latitude: z
        .number({ message: 'Latitude must be a valid number.' })
        .optional(),
    longitude: z
        .number({ message: 'Longitude must be a valid number.' })
        .optional(),
});

export const updateAddressSchema = createAddressSchema.partial();
