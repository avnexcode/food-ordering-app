import { Button } from '@/components/ui/button';

// type CheckoutAmountDetailContentProps = {};

export const CheckoutAmountDetailContent = () => {
    return (
        <div className="w-full flex flex-col gap-[50px] ">
            <div className="w-full">
                <div className="w-full flex gap-2 items-center">
                    <div className="flex items-center gap-5">
                        <Button>-</Button>
                        <span className="text-2xl font-bold">1</span>
                        <Button>+</Button>
                    </div>
                    <div className="flex gap-2 font-semibold">
                        <h1>Stok : </h1>
                        <span className="text-orange-500">Sisa 10</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center text-2xl">
                <h1>Subtotal </h1>
                <span className="font-bold">Rp. 15.000</span>
            </div>
        </div>
    );
};
