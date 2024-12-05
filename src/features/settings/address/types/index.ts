import { z } from 'zod';

export const createAddressFormSchema = z.object({
    label: z.string(),
});

export const updateAddressFormSchema = z.object({
    label: z.string(),
});

export type CreateAddressFormSchema = z.infer<typeof createAddressFormSchema>;
export type UpdateAddressFormSchema = z.infer<typeof updateAddressFormSchema>;
