import { z } from 'zod';
export const createDistrictSchema = z.object({
    regency_id: z.bigint().refine(val => val > 0, {
        message: 'Regency ID must be a positive integer.',
    }),
    name: z
        .string()
        .min(1, { message: 'District name is required and cannot be empty.' }),
    alt_name: z.string().max(255, {
        message: 'Alternative name must not exceed 255 characters.',
    }),
    latitude: z
        .number()
        .min(-90, { message: 'Latitude must be between -90 and 90.' })
        .max(90, { message: 'Latitude must be between -90 and 90.' }),
    longitude: z
        .number()
        .min(-180, { message: 'Longitude must be between -180 and 180.' })
        .max(180, { message: 'Longitude must be between -180 and 180.' }),
});

export const updateDistrictSchema = createDistrictSchema.partial();
