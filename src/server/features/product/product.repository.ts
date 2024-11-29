import { db } from '@/server/database/db';
import type {
    CreateProductRequest,
    UpdateProductRequest,
} from './product.model';

export const findProducts = async () => {
    const products = await db.product.findMany({ include: { store: true } });
    return products;
};

export const findProductById = async (id: string) => {
    const product = await db.product.findUnique({ where: { id } });
    return product;
};

export const countProductById = async (id: string) => {
    const productCount = await db.product.count({ where: { id } });
    return productCount;
};

export const insertProductOne = async (
    request: CreateProductRequest,
    store_id: string,
) => {
    const newProductData = {
        ...request,
        store_id,
        price: request.price,
        stock: Number(request.stock),
    };

    const product = await db.product.create({ data: newProductData });

    return product;
};

export const updateProductOne = async (
    id: string,
    request: UpdateProductRequest,
) => {
    const oldProduct = await findProductById(id);

    const updateProductData = {
        ...request,
        store_id: oldProduct?.store_id,
    };

    const product = await db.product.update({
        where: { id },
        data: updateProductData,
    });

    return product;
};

export const destroyProduct = async (id: string) => {
    const product = await db.product.delete({ where: { id } });
    return product;
};
