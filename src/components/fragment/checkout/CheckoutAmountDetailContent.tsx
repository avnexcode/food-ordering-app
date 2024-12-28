import { Button } from '@/components/ui/button';
import type { ProductWithRelations } from '@/features/product/types';
import { toIDR } from '@/utils';

type CheckoutAmountDetailContentProps = {
    product: ProductWithRelations;
    quantity: number;
    stock: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

export const CheckoutAmountDetailContent = ({
    product,
    quantity,
    stock,
    onIncrement,
    onDecrement,
}: CheckoutAmountDetailContentProps) => {
    const subtotal = product.price * quantity;

    return (
        <div className="w-full flex flex-col gap-[50px]">
            <div className="w-full">
                <div className="w-full flex gap-2 items-center">
                    <div className="flex items-center gap-5 border border-gray-200 p-2 rounded-lg">
                        <Button
                            onClick={onDecrement}
                            variant={'ghost'}
                            disabled={quantity === 1}
                            className='text-2xl text-gray-500'
                        >
                            -
                        </Button>
                        <h6 className="text-2xl font-bold">{quantity}</h6>
                        <Button
                            onClick={onIncrement}
                            variant={'ghost'}
                            disabled={quantity === stock}
                            className='text-2xl text-gray-500'
                        >
                            +
                        </Button>
                    </div>
                    <div className="flex gap-2 font-semibold">
                        <h6 >Stok : </h6>
                        <h6 className="text-orange-500"> {stock}</h6>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center text-2xl">
                <h6 className="font-light text-gray-500">Subtotal</h6>
                <h6 className="font-bold">{toIDR(subtotal.toFixed(2))}</h6>
            </div>
        </div>
    );
};
