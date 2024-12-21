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

export const CheckoutProductDetail = () => {
    const router = useRouter();
    const { id } = router.query as { id: string };
    const { data: product, error, isLoading } = useProductId(id); // Menyertakan error dan isLoading

    // Debugging log untuk memeriksa data produk
    console.log('Product Data:', product);

    if (isLoading) {
        return <p>Loading product details...</p>;
    }

    if (error) {
        return <p>Error loading product details</p>;
    }

    return (
        <Card className="w-full h-[400px] flex flex-col justify-center">
            <CardHeader>
                <CardTitle>
                    <h3>{product?.name}</h3>
                </CardTitle>
                <CardDescription>Terjual 24</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-[50px]">
                {product ? (
                    <CheckoutProductDetailContent product={product} />
                ) : (
                    <p>Loading...</p>
                )}
            </CardContent>
            <CardFooter>
                {/* Pastikan untuk mengoper storeId ke StoreHeader */}
                {product?.store_id ? (
                    <StoreHeader storeId={product.store_id} />
                ) : (
                    <div>Store ID not available.</div>
                )}
            </CardFooter>
        </Card>
    );
};
