import { DashboardStoreLayout } from '@/components/layout/DashboardStoreLayout';
import { UpdateProductForm } from '@/features/product/components/form/UpdateProductForm';
import Head from 'next/head';

export const DashboardStoreProductEditPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Product Edit</title>
            </Head>
            <UpdateProductForm />
        </>
    );
};

DashboardStoreProductEditPage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);
