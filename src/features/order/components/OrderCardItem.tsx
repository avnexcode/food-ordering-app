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
import { CreditCard } from 'lucide-react';

export const OrderCardItem = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-center border-b border-zinc-200 py-3">
                <CardTitle className="text-lg">Shopping</CardTitle>
                <div className="flex gap-10 items-center">
                    <CardDescription>Pending</CardDescription>
                    <OrderCardMenu />
                </div>
            </CardHeader>
            <CardContent className="flex gap-5 py-10 border-b border-zinc-200">
                <div className="w-64">
                    <img src="https://placehold.co/600x400" alt="" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-between w-full">
                        <div>
                            <p>Minyak Lintah</p>
                        </div>
                        <div className="flex gap-2">
                            <p>{toIDR(300000)}</p>
                            <p>x</p>
                            <p>3</p>
                        </div>
                    </div>
                    <p>Toko Lendir Mas Yoga</p>
                </div>
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
