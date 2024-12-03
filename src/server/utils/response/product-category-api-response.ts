import type {
    ProductCategoryResponse,
    ProductCategoryReturn,
} from '../../features/product-category/product-category.model';

export const toProductCategoryResponse = (
    productCategory: ProductCategoryReturn,
): ProductCategoryResponse => ({
    id: productCategory.id,
    name: productCategory.name,
    products: productCategory.products,
});
