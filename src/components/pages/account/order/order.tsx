import { AccountLayout } from '@/components/layout/AccountLayout';
import { OrderCard } from '@/features/order/components/OrderCard';
import Head from 'next/head';

export const AccountOrderPage = () => {
    return (
        <>
            <Head>
                <title>Account - Order</title>
            </Head>
            <header className="py-5">
                <h1 className="text-xl font-semibold text-green-700">
                    Order List
                </h1>
            </header>
            <OrderCard />
        </>
    );
};

AccountOrderPage.getLayout = (page: React.ReactElement) => (
    <AccountLayout>{page}</AccountLayout>
);
