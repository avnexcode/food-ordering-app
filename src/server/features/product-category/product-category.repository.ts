import { db } from '@/server/database/db';
import type {
    CreateProductCategoryRequest,
    ProductCategoryWithRelationsResponse,
    UpdateProductCategoryRequest,
} from './product-category.model';
import type { ProductCategory } from '@prisma/client';

export const productCategoryRepository = {
    findMany: async (): Promise<
        ProductCategoryWithRelationsResponse[] | null
    > => {
        const productCategories = await db.productCategory.findMany({
            include: { store: true, products: true },
        });

        return productCategories;
    },

    findUniqueId: async (
        id: string,
    ): Promise<ProductCategoryWithRelationsResponse | null> => {
        const productCategory = await db.productCategory.findUnique({
            where: { id },
            include: { store: true, products: true },
        });

        return productCategory;
    },

    insertOnce: async (
        request: CreateProductCategoryRequest,
        store_id: string,
    ): Promise<ProductCategory> => {
        const newProductCategoryData = {
            ...request,
            store_id,
        };

        const productCategory = await db.productCategory.create({
            data: newProductCategoryData,
        });

        return productCategory;
    },

    updateOnce: async (
        id: string,
        request: UpdateProductCategoryRequest,
    ): Promise<ProductCategory> => {
        const updateProductCategoryData = {
            ...request,
        };

        const productCategory = await db.productCategory.update({
            where: { id },
            data: updateProductCategoryData,
        });

        return productCategory;
    },

    deleteOnce: async (id: string): Promise<ProductCategory> => {
        const productCategory = await db.productCategory.delete({
            where: { id },
        });
        return productCategory;
    },
};
