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

// type CheckoutAmountDetailProps = {};

export const CheckoutAmountDetail = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Atur jumlah dan catatan</CardTitle>
                <CardDescription>
                    <Input placeholder="Catatan" className="border-none" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CheckoutAmountDetailContent />
            </CardContent>
            <CardFooter className="w-full flex flex-col gap-3">
                <Button className="w-full">Add Cart</Button>
                <Button className="w-full">Checkout</Button>
            </CardFooter>
        </Card>
    );
};
