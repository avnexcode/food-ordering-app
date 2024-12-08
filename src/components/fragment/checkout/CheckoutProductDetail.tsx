import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { CheckoutProductDetailContent } from './CheckoutProductDetailContent';
import { StoreHeader } from '@/features/store/components/StoreHeader';

// type CheckoutProductDetailProps = {};

export const CheckoutProductDetail = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Yoga Berminyak</CardTitle>
                <CardDescription>Terjual 24</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-[50px]">
                <CheckoutProductDetailContent />
            </CardContent>
            <CardFooter>
                <StoreHeader />
            </CardFooter>
        </Card>
    );
};
