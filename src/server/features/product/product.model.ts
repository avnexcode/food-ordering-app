import type { z } from 'zod';
import type {
    createProductSchema,
    updateProductSchema,
} from './product.validation';

export type CreateProductRequest = z.infer<typeof createProductSchema>;
export type UpdateProductRequest = z.infer<typeof updateProductSchema>;
