import type { ProductWithRelations } from '../../types';
import { CardProduct } from './CardProduct';

type CardProductListProps = {
    products: Array<ProductWithRelations>;
    onAddToCart?: (productId: string) => void;
};

export const CardProductList = ({
    products,
    onAddToCart,
}: CardProductListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products?.map(product => (
                <CardProduct
                    key={product.id}
                    product={product}
                    onAddToCart={() => onAddToCart?.(product.id)}
                />
            ))}
        </div>
    );
};
