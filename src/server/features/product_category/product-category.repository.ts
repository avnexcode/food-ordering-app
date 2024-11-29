import { db } from '@/server/database/db';
import type {
    CreateProductCategoryRequest,
    UpdateProductCategoryRequest,
} from './product-category.model';

export const findProductCategories = async () => {
    const productCategories = await db.productCategory.findMany({
        include: { products: true },
    });

    return productCategories;
};

export const findProductCategoryById = async (id: string) => {
    const productCategory = await db.productCategory.findUnique({
        where: { id },
    });

    return productCategory;
};

export const insertProductCategoryOne = async (
    request: CreateProductCategoryRequest,
    store_id: string,
) => {
    const newProductCategoryData = {
        ...request,
        store_id,
    };

    const productCategory = await db.productCategory.create({
        data: newProductCategoryData,
    });

    return productCategory;
};

export const updateProductCategoryOne = async (
    id: string,
    request: UpdateProductCategoryRequest,
) => {
    const updateProductCategoryData = {
        ...request,
    };

    const productCategory = await db.productCategory.update({
        where: { id },
        data: updateProductCategoryData,
    });

    return productCategory;
};

export const destroyProductCategory = async (id: string) => {
    const productCategory = await db.productCategory.delete({ where: { id } });
    return productCategory;
};
