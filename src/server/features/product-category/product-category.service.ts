import { NotFoundException } from '@/server/lib/error.exception';
import { productCategoryRepository } from './product-category.repository';
import type {
    CreateProductCategoryRequest,
    ProductCategoryResponse,
    UpdateProductCategoryRequest,
} from './product-category.model';
import { validateSchema } from '@/server/service';
import {
    createProductCategorySchema,
    updateProductCategorySchema,
} from './product-category.validation';
import type { ProductCategory } from '@prisma/client';
import { toProductCategoryResponse } from '@/server/utils/product-category-api-response';

export const productCategoryService = {
    getAll: async (): Promise<ProductCategoryResponse[]> => {
        const data = await productCategoryRepository.findMany();

        const productsCategories = data?.map(productCategory =>
            toProductCategoryResponse(productCategory),
        );

        return productsCategories!;
    },

    getById: async (id: string): Promise<ProductCategoryResponse> => {
        const productCategory =
            await productCategoryRepository.findUniqueId(id);

        if (!productCategory) {
            throw new NotFoundException('Product Category not found');
        }

        return toProductCategoryResponse(productCategory);
    },

    create: async (
        request: CreateProductCategoryRequest,
        store_id: string,
    ): Promise<ProductCategory> => {
        const validatedRequest: CreateProductCategoryRequest = validateSchema(
            createProductCategorySchema,
            request,
        );

        const productCategory = await productCategoryRepository.insertOne(
            validatedRequest,
            store_id,
        );

        return productCategory;
    },

    update: async (
        id: string,
        request: UpdateProductCategoryRequest,
    ): Promise<ProductCategory> => {
        const validatedRequest: UpdateProductCategoryRequest = validateSchema(
            updateProductCategorySchema,
            request,
        );
        await productCategoryService.getById(id);

        const productCategory = await productCategoryRepository.updateOne(
            id,
            validatedRequest,
        );

        return productCategory;
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await productCategoryService.getById(id);

        await productCategoryRepository.deleteOne(id);

        return { id };
    },
};
