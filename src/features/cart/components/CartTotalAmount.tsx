import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export const CartTotalAmount = () => {
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
                <Button className="w-full">Checkout</Button>
            </CardFooter>
        </Card>
    );
}
