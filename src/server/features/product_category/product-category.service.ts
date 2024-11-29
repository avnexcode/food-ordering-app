import { NotFoundException } from '@/server/lib/error.exception';
import {
    destroyProductCategory,
    findProductCategories,
    findProductCategoryById,
    insertProductCategoryOne,
    updateProductCategoryOne,
} from './product-category.repository';
import type {
    CreateProductCategoryRequest,
    UpdateProductCategoryRequest,
} from './product-category.model';
import { validateSchema } from '@/server/service';
import {
    createProductCategorySchema,
    updateProductCategorySchema,
} from './product-category.validation';

export const getProductCategories = async () => {
    const productsCategories = await findProductCategories();
    return productsCategories;
};

export const getProductCategoryById = async (id: string) => {
    const productCategory = await findProductCategoryById(id);

    if (!productCategory) {
        throw new NotFoundException('Product Category not found');
    }

    return productCategory;
};

export const createProductCategory = async (
    request: CreateProductCategoryRequest,
    store_id: string,
) => {
    const validatedCreateProductCategoryRequest: CreateProductCategoryRequest =
        validateSchema(createProductCategorySchema, request);

    const productCategory = await insertProductCategoryOne(
        validatedCreateProductCategoryRequest,
        store_id,
    );

    return productCategory;
};

export const updateProductCategory = async (
    id: string,
    request: UpdateProductCategoryRequest,
) => {
    const validatedUpdateProductCategoryRequest: UpdateProductCategoryRequest =
        validateSchema(updateProductCategorySchema, request);
    await getProductCategoryById(id);

    const productCategory = await updateProductCategoryOne(
        id,
        validatedUpdateProductCategoryRequest,
    );

    return productCategory;
};

export const deleteProductCategory = async (id: string) => {
    await getProductCategoryById(id);

    await destroyProductCategory(id);

    return { id };
};
