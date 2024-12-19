import { DashboardStoreLayout } from '@/components/layout/DashboardStoreLayout';
import { OrderTable } from '@/features/order/components/table/OrderTable';
import { OrderTableFooter } from '@/features/order/components/table/OrderTableFooter';
import { OrderTableHeader } from '@/features/order/components/table/OrderTableHeader';
import Head from 'next/head';

export const DashboardStoreOrderPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Store Order</title>
            </Head>
            <OrderTableHeader />
            <OrderTable />
            <OrderTableFooter />
        </>
    );
};

DashboardStoreOrderPage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);
