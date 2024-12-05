import { NotFoundException } from '@/server/lib/error.exception';
import { productRepository } from './product.repository';
import type {
    CreateProductRequest,
    ProductWithRelations,
    UpdateProductRequest,
} from './product.model';
import type { Product } from '@prisma/client';
import {
    toProductResponse,
    toProductWithRelationsResponse,
} from '@/server/utils/response/product-api-response';
import { validateSchema } from '@/server/service';
import { createProductSchema } from './product.validation';
import { userService } from '../user';

export const productService = {
    getAll: async (): Promise<ProductWithRelations[]> => {
        const response = await productRepository.findMany();

        const products = response?.map(product =>
            toProductWithRelationsResponse(product),
        );

        return products!;
    },

    getById: async (id: string): Promise<ProductWithRelations> => {
        const product = await productRepository.findUniqueId(id);

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        return toProductWithRelationsResponse(product);
    },

    create: async (
        request: CreateProductRequest,
        user_id: string,
    ): Promise<Product> => {
        const user = await userService.getById(user_id);

        if (!user.store) {
            throw new NotFoundException('User have no store');
        }

        const validatedRequest: CreateProductRequest = validateSchema(
            createProductSchema,
            request,
        );

        const product = await productRepository.insertOnce(
            validatedRequest,
            user.store?.id,
        );

        return toProductResponse(product);
    },

    update: async (
        id: string,
        request: UpdateProductRequest,
    ): Promise<Product> => {
        await productService.getById(id);

        const product = await productRepository.updateOnce(id, request);

        return toProductResponse(product);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await productService.getById(id);

        await productRepository.deleteOnce(id);

        return { id };
    },
};
