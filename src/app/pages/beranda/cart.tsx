import { MainLayout } from '@/components/layout/MainLayout';
import { Cart } from '@/features/cart/components/Cart';
import Head from 'next/head';

export const CartPage = () => {
    return (
        <>
            <Head>
                <title>Foodzy - Cart</title>
            </Head>
            <Cart />
        </>
    );
};

CartPage.getLayout = (page: React.ReactElement) => (
    <MainLayout>{page}</MainLayout>
);
