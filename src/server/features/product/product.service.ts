import { NotFoundException } from '@/server/lib/error.exception';
import { productRepository } from './product.repository';
import type {
    CreateProductRequest,
    ProductResponse,
    UpdateProductRequest,
} from './product.model';
import type { Product } from '@prisma/client';
import { toProductResponse } from '@/server/utils/product-api-response';

export const productService = {
    getAll: async (): Promise<ProductResponse[]> => {
        const data = await productRepository.findMany();

        const products = data?.map(product => toProductResponse(product));

        return products!;
    },

    getById: async (id: string): Promise<ProductResponse> => {
        const product = await productRepository.findUniqueId(id);

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        return toProductResponse(product);
    },

    create: async (
        request: CreateProductRequest,
        store_id: string,
    ): Promise<Product> => {
        const product = await productRepository.insertOne(request, store_id);

        return product;
    },

    update: async (
        id: string,
        request: UpdateProductRequest,
    ): Promise<Product> => {
        await productService.getById(id);

        const product = await productRepository.updateOne(id, request);

        return product;
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await productService.getById(id);

        await productRepository.deleteOne(id);

        return { id };
    },
};
