import { NotFoundException } from '@/server/lib/error.exception';
import {
    destroyProduct,
    findProductById,
    findProducts,
    insertProductOne,
    updateProductOne,
} from './product.repository';
import type {
    CreateProductRequest,
    UpdateProductRequest,
} from './product.model';

export const getProducts = async () => {
    const products = await findProducts();
    return products;
};

export const getProductById = async (id: string) => {
    const product = await findProductById(id);

    if (!product) {
        throw new NotFoundException('Product not found');
    }

    return product;
};

export const createProduct = async (
    request: CreateProductRequest,
    store_id: string,
) => {
    const product = await insertProductOne(request, store_id);

    return product;
};

export const updateProduct = async (
    id: string,
    request: UpdateProductRequest,
) => {
    await getProductById(id);

    const product = await updateProductOne(id, request);

    return product;
};

export const deleteProduct = async (id: string) => {
    await getProductById(id);

    await destroyProduct(id);

    return { id };
};
