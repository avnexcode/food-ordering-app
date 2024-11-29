import { NotFoundException } from '@/server/lib/error.exception';
import { productCategoryRepository } from './product-category.repository';
import type {
    CreateProductCategoryRequest,
    UpdateProductCategoryRequest,
} from './product-category.model';
import { validateSchema } from '@/server/service';
import {
    createProductCategorySchema,
    updateProductCategorySchema,
} from './product-category.validation';

export const productCategoryService = {
    getAll: async () => {
        const productsCategories = await productCategoryRepository.findMany();
        return productsCategories;
    },

    getById: async (id: string) => {
        const productCategory =
            await productCategoryRepository.findUniqueId(id);

        if (!productCategory) {
            throw new NotFoundException('Product Category not found');
        }

        return productCategory;
    },

    create: async (request: CreateProductCategoryRequest, store_id: string) => {
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

    update: async (id: string, request: UpdateProductCategoryRequest) => {
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

    delete: async (id: string) => {
        await productCategoryService.getById(id);

        await productCategoryRepository.deleteOne(id);

        return { id };
    },
};
