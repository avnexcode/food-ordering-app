import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { CheckoutProductDetailContent } from './CheckoutProductDetailContent';
import { StoreHeader } from '@/features/store/components/StoreHeader';
import { useRouter } from 'next/router';
import { useProductId } from '@/features/product/api';

// type CheckoutProductDetailProps = {};

export const CheckoutProductDetail = () => {
    const router = useRouter();
    const { id } = router.query as { id: string };
    const { data: product } = useProductId(id);
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>
                    <h3>{product?.name}</h3>
                </CardTitle>
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
