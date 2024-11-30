import type {
    ProductResponse,
    ProductReturn,
} from '../features/product/product.model';
import { toStoreResponse } from './toStoreResponse';

export const toProductResponse = (product: ProductReturn): ProductResponse => ({
    id: product.id,
    name: product.name,
    price: product.price,
    stock: product.stock,
    store: toStoreResponse(product.store),
    category: product.category ?? null,
});
