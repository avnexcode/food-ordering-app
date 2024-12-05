import { z } from 'zod';
export const createVillageSchema = z.object({
    district_id: z.string(),
    name: z
        .string()
        .min(1, { message: 'Village name is required and cannot be empty.' }),
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

export const updateVillageSchema = createVillageSchema.partial();
