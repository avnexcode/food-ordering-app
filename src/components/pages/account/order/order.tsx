import { AccountLayout } from '@/components/layout/AccountLayout';
import { OrderCard } from '@/features/order/components/OrderCard';
import Head from 'next/head';

export const AccountOrderPage = () => {
    return (
        <>
            <Head>
                <title>Account - Order</title>
            </Head>
            <header className="p-5">
                <h3 className="text-green-700">
                    Order List
                </h3>
            </header>
            <OrderCard />
        </>
    );
};

AccountOrderPage.getLayout = (page: React.ReactElement) => (
    <AccountLayout>{page}</AccountLayout>
);
