import { CartProduct } from './CartProduct';

export const CartProductList = () => {
    return (
        <div className="flex gap-4 flex-col">
            <CartProduct />
            <CartProduct />
            <CartProduct />
        </div>
    );
};
