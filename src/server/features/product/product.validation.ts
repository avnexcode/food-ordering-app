import { z } from 'zod';

export const createProductSchema = z.object({
    name: z
        .string()
        .min(1, 'Product name is required')
        .max(100, 'Product name must not exceed 100 characters'),
    price: z
        .string()
        .regex(
            /^\d+(\.\d{1,2})?$/,
            'Price must be a valid number with up to 2 decimal places',
        ),
    description: z.string().min(1).max(255),
    stock: z
        .number()
        .min(0, 'Stock cannot be negative')
        .int('Stock must be an integer'),
    category_id: z.string().min(1, 'Category ID is required').optional(),
    store_id: z.string().min(1, 'Store ID is required'),
});

export const updateProductSchema = createProductSchema.partial();
