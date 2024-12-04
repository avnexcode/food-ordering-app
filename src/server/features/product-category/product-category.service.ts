import { NotFoundException } from '@/server/lib/error.exception';
import { productCategoryRepository } from './product-category.repository';
import type {
    CreateProductCategoryRequest,
    ProductCategoryWithRelationsResponse,
    UpdateProductCategoryRequest,
} from './product-category.model';
import { validateSchema } from '@/server/service';
import {
    createProductCategorySchema,
    updateProductCategorySchema,
} from './product-category.validation';
import type { ProductCategory } from '@prisma/client';
import {
    toProductCategoryResponse,
    toProductCategoryWithRelationsResponse,
} from '@/server/utils/response/product-category-api-response';

export const productCategoryService = {
    getAll: async (): Promise<ProductCategoryWithRelationsResponse[]> => {
        const response = await productCategoryRepository.findMany();

        const productsCategories = response?.map(productCategory =>
            toProductCategoryWithRelationsResponse(productCategory),
        );

        return productsCategories!;
    },

    getById: async (
        id: string,
    ): Promise<ProductCategoryWithRelationsResponse> => {
        const productCategory =
            await productCategoryRepository.findUniqueId(id);

        if (!productCategory) {
            throw new NotFoundException('Product Category not found');
        }

        return toProductCategoryWithRelationsResponse(productCategory);
    },

    create: async (
        request: CreateProductCategoryRequest,
        store_id: string,
    ): Promise<ProductCategory> => {
        const validatedRequest: CreateProductCategoryRequest = validateSchema(
            createProductCategorySchema,
            request,
        );

        const productCategory = await productCategoryRepository.insertOnce(
            validatedRequest,
            store_id,
        );

        return toProductCategoryResponse(productCategory);
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

        const productCategory = await productCategoryRepository.updateOnce(
            id,
            validatedRequest,
        );

        return toProductCategoryResponse(productCategory);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await productCategoryService.getById(id);

        await productCategoryRepository.deleteOnce(id);

        return { id };
    },
};
