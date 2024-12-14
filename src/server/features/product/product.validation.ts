import { z } from 'zod';

export const createProductSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Product name is required.' })
        .max(100, { message: 'Product name must not exceed 100 characters.' }),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:
            'Slug must be in a valid format (lowercase, hyphen-separated).',
    }),
    price: z
        .number()
        .min(0, { message: 'Price must be a positive number.' })
        .max(99999999.99, {
            message: 'Price must not exceed 99,999,999.99.',
        }),
    description: z
        .string()
        .min(1, { message: 'Description is required.' })
        .max(65535, {
            message: 'Description must be 65535 characters or less',
        }),
    images: z
        .array(z.string().url({ message: 'Each image must be a valid URL.' }))
        .min(1, { message: 'At least one image is required.' })
        .max(10, 'Maximum of 10 images are allowed')
        .optional(),
    stock: z
        .number()
        .int({ message: 'Stock must be an integer.' })
        .min(0, { message: 'Stock cannot be negative.' }),
    weight: z
        .number({ message: 'Weight must be a valid number.' })
        .positive({ message: 'Weight must be a positive value.' })
        .optional(),
    category_id: z
        .string()
        .min(1, { message: 'Category ID must be a valid string.' })
        .optional(),
});

export const updateProductSchema = createProductSchema.partial();
