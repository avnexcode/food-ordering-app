import * as z from 'zod';

export const createAddressFormSchema = z.object({
    label: z.string().max(50, 'Label must be 50 characters or less'),
    street: z.string().max(100, 'Street must be 100 characters or less'),
    village_id: z
        .string()
        .refine(id => id !== '', { message: 'Village ID must not be empty' }),
    district_id: z
        .string()
        .refine(id => id !== '', { message: 'District ID must not be empty' }),
    city_id: z
        .string()
        .refine(id => id !== '', { message: 'City ID must not be empty' }),
    province_id: z
        .string()
        .refine(id => id !== '', { message: 'Province ID must not be empty' }),
    country: z
        .string()
        .max(100, 'Country must be 100 characters or less')
        .optional(),
    postal_code: z
        .string()
        .max(10, 'Postal code must be 10 characters or less')
        .optional(),
    description: z
        .string()
        .max(150, 'Description must be 150 characters or less')
        .optional(),
});

export const updateAddressFormSchema = createAddressFormSchema.partial();

export type CreateAddressFormSchema = z.infer<typeof createAddressFormSchema>;
export type UpdateAddressFormSchema = z.infer<typeof updateAddressFormSchema>;
