import type { z } from 'zod';
import type {
    createProductSchema,
    updateProductSchema,
} from './product.validation';
import type { Prisma } from '@prisma/client';
import type { StoreWithOwnerRelation } from '../store/store.model';

export type CreateProductRequest = z.infer<typeof createProductSchema>;
export type UpdateProductRequest = z.infer<typeof updateProductSchema>;

export type ProductWithRelations = Prisma.ProductGetPayload<{
    include: {
        category: true;
    };
}> & {
    store: StoreWithOwnerRelation;
};
