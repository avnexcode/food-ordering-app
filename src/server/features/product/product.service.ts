import { NotFoundException } from '@/server/lib/error.exception';
import { productRepository } from './product.repository';
import type {
    CreateProductRequest,
    UpdateProductRequest,
} from './product.model';

export const productService = {
    getAll: async () => {
        const products = await productRepository.findMany();
        return products;
    },

    getById: async (id: string) => {
        const product = await productRepository.findUniqueById(id);

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        return product;
    },

    create: async (request: CreateProductRequest, store_id: string) => {
        const product = await productRepository.insertOne(request, store_id);

        return product;
    },

    update: async (id: string, request: UpdateProductRequest) => {
        await productService.getById(id);

        const product = await productRepository.updateOne(id, request);

        return product;
    },

    delete: async (id: string) => {
        await productService.getById(id);

        await productRepository.deleteOne(id);

        return { id };
    },
};
