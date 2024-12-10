import Head from 'next/head';
import { DashboardStoreLayout } from '@/components/layout/DashboardStoreLayout';
import { ProductTable } from '@/features/product/components/table/ProductTable';
import { ProductTableHeader } from '@/features/product/components/table/ProductTableHeader';
import { ProductTableFooter } from '@/features/product/components/table/ProductTableFooter';

export const DashboardStoreProductPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Store Product</title>
            </Head>
            <ProductTableHeader />
            <ProductTable />
            <ProductTableFooter />
        </>
    );
};

DashboardStoreProductPage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);
