import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { toIDR } from '@/utils';
import { OrderCardMenu } from './OrderCardMenu';
import { CreditCard, ShoppingBag } from 'lucide-react';
import { OrderCardContent } from './OrderCardContent';

export const OrderCardItem = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-center border-b border-zinc-200 py-3">
                <CardTitle className="text-lg flex gap-2">
                    <ShoppingBag />
                    Shopping
                </CardTitle>
                <div className="flex gap-10 items-center">
                    <CardDescription>Pending</CardDescription>
                    <OrderCardMenu />
                </div>
            </CardHeader>
            <CardContent className="flex gap-5 border-b border-zinc-200 flex-col">
                <OrderCardContent />
                <OrderCardContent />
            </CardContent>
            <CardFooter className="flex justify-between gap-10 py-3">
                <div className="flex justify-between w-full">
                    <span className="font-semibold text-lg">Total :</span>
                    <span className="font-semibold text-lg">
                        {toIDR(9000000)}
                    </span>
                </div>
                <Button size={'sm'}>
                    <CreditCard />
                    Pay Now
                </Button>
            </CardFooter>
        </Card>
    );
};
