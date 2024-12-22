import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { CheckoutAmountDetailContent } from './CheckoutAmountDetailContent';
import { useRouter } from 'next/router';
import { useProductId } from '@/features/product/api';
import React from 'react';

export const CheckoutAmountDetail = () => {
    const router = useRouter();
    const { id } = router.query as { id: string };
    const { data: product, error, isLoading } = useProductId(id);

    const [quantity, setQuantity] = React.useState(1);
    const [stock, setStock] = React.useState(10);

    React.useEffect(() => {
        if (product) {
            setStock(product.stock);
        }
    }, [product]);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
            setStock(stock - 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setStock(stock + 1);
        }
    };

    if (isLoading) {
        return <p>Loading product details...</p>;
    }

    if (error) {
        return <p>Error loading product details</p>;
    }

    return (
        <Card className="w-full h-[400px] flex flex-col justify-center">
            <CardHeader>
                <CardTitle>Atur jumlah dan catatan</CardTitle>
                <CardDescription>
                    <Input placeholder="Catatan" className="border-none" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                {product && (
                    <CheckoutAmountDetailContent
                        product={product}
                        quantity={quantity}
                        stock={stock}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                )}
            </CardContent>
            <CardFooter className="w-full flex flex-col gap-2">
                <Button className="w-full bg-green-600 hover:bg-green-700">Add Cart</Button>
                <Button className="w-full bg-white border-2 hover:border-green-600 hover:bg-white hover:text-green-600 border-green-600 text-green-600 font-semibold">Checkout</Button>
            </CardFooter>
        </Card>
    );
};
