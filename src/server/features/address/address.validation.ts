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
    village_id: z
        .number({ message: 'Village ID must be a valid number.' })
        .int({ message: 'Village ID must be an integer.' })
        .positive({ message: 'Village ID must be a positive number.' }),
    district_id: z
        .number({ message: 'District ID must be a valid number.' })
        .int({ message: 'District ID must be an integer.' })
        .positive({ message: 'District ID must be a positive number.' }),
    city_id: z
        .number({ message: 'City ID must be a valid number.' })
        .int({ message: 'City ID must be an integer.' })
        .positive({ message: 'City ID must be a positive number.' }),
    province_id: z
        .number({ message: 'Province ID must be a valid number.' })
        .int({ message: 'Province ID must be an integer.' })
        .positive({ message: 'Province ID must be a positive number.' }),
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
