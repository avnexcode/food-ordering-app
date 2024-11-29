import { db } from '@/server/database/db';
import type {
    CreateProductCategoryRequest,
    UpdateProductCategoryRequest,
} from './product-category.model';

export const productCategoryRepository = {
    findMany: async () => {
        const productCategories = await db.productCategory.findMany({
            include: { products: true },
        });

        return productCategories;
    },

    findUniqueById: async (id: string) => {
        const productCategory = await db.productCategory.findUnique({
            where: { id },
        });

        return productCategory;
    },

    insertOne: async (
        request: CreateProductCategoryRequest,
        store_id: string,
    ) => {
        const newProductCategoryData = {
            ...request,
            store_id,
        };

        const productCategory = await db.productCategory.create({
            data: newProductCategoryData,
        });

        return productCategory;
    },

    updateOne: async (id: string, request: UpdateProductCategoryRequest) => {
        const updateProductCategoryData = {
            ...request,
        };

        const productCategory = await db.productCategory.update({
            where: { id },
            data: updateProductCategoryData,
        });

        return productCategory;
    },

    deleteOne: async (id: string) => {
        const productCategory = await db.productCategory.delete({
            where: { id },
        });
        return productCategory;
    },
};
