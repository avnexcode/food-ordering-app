import { z } from 'zod';

export const createProductFormSchema = z.object({
    name: z.string().max(100, 'Name must be 100 characters or less'),
    price: z
        .number()
        .positive('Price must be a positive number')
        .refine(price => price <= 9999999.99, {
            message: 'Price must be less than or equal to 9,999,999.99',
        })
        .transform(price => Number(price.toFixed(2))),
    description: z
        .string()
        .max(65535, 'Description must be 65535 characters or less'),
    images: z
        .array(z.string())
        .max(10, 'Maximum of 10 images are allowed')
        .optional(),
    stock: z
        .number()
        .int('Stock must be an integer')
        .min(0, 'Stock must be 0 or greater'),
    weight: z.number().positive('Weight must be a positive number').optional(),
    category_id: z.string().optional(),
});

export const updateProductFormSchema = createProductFormSchema.partial();

export type CreateProductFormSchema = z.infer<typeof createProductFormSchema>;
export type UpdateProductFormSchema = z.infer<typeof updateProductFormSchema>;
