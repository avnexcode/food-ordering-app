import { CartProductList } from './CartProductList';
import { CartTotalAmount } from './CartTotalAmount';

export const Cart = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-5">
            <main className="flex flex-col">
                <div className="mb-5 ">
                    <h1 className="text-xl font-bold">Shopping Cart</h1>
                    <span>Review your cart before proceeding to checkout.</span>
                </div>
                <div className="flex gap-8">
                    <CartProductList />
                    <CartTotalAmount />
                </div>
            </main>
        </div>
    );
};
