import { db } from '@/server/database/db';
import type {
    CreateProductRequest,
    ProductReturn,
    UpdateProductRequest,
} from './product.model';
import type { Product } from '@prisma/client';

export const productRepository = {
    findMany: async (): Promise<ProductReturn[] | null> => {
        const products = await db.product.findMany({
            include: {
                store: {
                    include: {
                        owner: {
                            include: {
                                addresses: true,
                                store: true,
                            },
                        },
                        products: true,
                        product_categories: true,
                    },
                },
                category: true,
            },
        });
        return products;
    },

    findUniqueId: async (id: string): Promise<ProductReturn | null> => {
        const product = await db.product.findUnique({
            where: { id },
            include: {
                store: {
                    include: {
                        owner: {
                            include: {
                                addresses: true,
                                store: true,
                            },
                        },
                        products: true,
                        product_categories: true,
                    },
                },
                category: true,
            },
        });
        return product;
    },

    countById: async (id: string): Promise<number> => {
        const productCount = await db.product.count({ where: { id } });
        return productCount;
    },

    insertOnce: async (
        request: CreateProductRequest,
        store_id: string,
    ): Promise<Product> => {
        const newProductData = {
            ...request,
            store_id,
            price: request.price,
            stock: Number(request.stock),
        };

        const product = await db.product.create({ data: newProductData });

        return product;
    },

    updateOnce: async (
        id: string,
        request: UpdateProductRequest,
    ): Promise<Product> => {
        const oldProduct = await productRepository.findUniqueId(id);

        const updateProductData = {
            ...request,
            store_id: oldProduct?.store_id,
        };

        const product = await db.product.update({
            where: { id },
            data: updateProductData,
        });

        return product;
    },

    deleteOnce: async (id: string): Promise<Product> => {
        const product = await db.product.delete({ where: { id } });
        return product;
    },
};
