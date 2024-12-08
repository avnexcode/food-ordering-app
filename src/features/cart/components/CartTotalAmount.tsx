import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export const CartTotalAmount = () => {
    const router = useRouter();
    return (
        <Card className="w-[400px] h-[250px]">
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Check your order details.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rp. 100.000.00</span>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full"
                    onClick={() => router.push('/checkout')}
                >
                    Checkout
                </Button>
            </CardFooter>
        </Card>
    );
};
