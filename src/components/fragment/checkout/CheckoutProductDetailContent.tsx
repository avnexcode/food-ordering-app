import type { ProductWithRelations } from '@/features/product/types';
import { toIDR } from '@/utils';

type CheckoutProductDetailContentProps = {
    product: ProductWithRelations;
};

export const CheckoutProductDetailContent = ({ product }: CheckoutProductDetailContentProps) => {
    return (
        <>
            <div>
                <h4 className="font-bold">{toIDR(product.price)}</h4>
            </div>
            <div>
                <h1 className="text-lg font-semibold">Description</h1>
                <span>{product.description}</span>
            </div>
        </>
    );
};
