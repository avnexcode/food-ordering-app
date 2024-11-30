import { db } from '@/server/database/db';
import type {
    CreateProductCategoryRequest,
    ProductCategoryReturn,
    UpdateProductCategoryRequest,
} from './product-category.model';
import type { ProductCategory } from '@prisma/client';

export const productCategoryRepository = {
    findMany: async (): Promise<ProductCategoryReturn[] | null> => {
        const productCategories = await db.productCategory.findMany({
            include: { products: true },
        });

        return productCategories;
    },

    findUniqueId: async (id: string): Promise<ProductCategoryReturn | null> => {
        const productCategory = await db.productCategory.findUnique({
            where: { id },
            include: { products: true },
        });

        return productCategory;
    },

    insertOne: async (
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

    updateOne: async (
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

    deleteOne: async (id: string): Promise<ProductCategory> => {
        const productCategory = await db.productCategory.delete({
            where: { id },
        });
        return productCategory;
    },
};
