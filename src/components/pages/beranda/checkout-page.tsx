import { CheckoutAmountDetail } from '@/components/fragment/checkout/CheckoutAmountDetail';
import { CheckoutCarousel } from '@/components/fragment/checkout/CheckoutCarousel';
import { CheckoutImagePreview } from '@/components/fragment/checkout/CheckoutImagePreview';
import { CheckoutProductDetail } from '@/components/fragment/checkout/CheckoutProductDetail';
import { MainLayout } from '@/components/layout/MainLayout';

import Head from 'next/head';

export const CheckoutPage = () => {
    return (
        <>
            <Head>
                <title>Foodzy - Checkout</title>
            </Head>
            <section className="w-full flex justify-center p-[50px]">
                <main className="w-[80%] flex gap-[10px]">
                    <div className="w-[30%] flex flex-col gap-2 justify-center items-center">
                        <CheckoutImagePreview url="https://placehold.co/450x450" />
                        <div className="w-full relative">
                            <CheckoutCarousel />
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <CheckoutProductDetail />
                    </div>
                    <div className="w-[30%]">
                        <CheckoutAmountDetail />
                    </div>
                </main>
            </section>
        </>
    );
};

CheckoutPage.getLayout = (page: React.ReactElement) => (
    <MainLayout>{page}</MainLayout>
);
