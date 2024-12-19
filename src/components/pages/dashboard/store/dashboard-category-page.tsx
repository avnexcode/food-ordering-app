import Head from 'next/head';
import { DashboardStoreLayout } from '@/components/layout/DashboardStoreLayout';
import { ProductCategoryTable } from '@/features/product-category/components/table/ProductCategoryTable';
import { ProductCategoryTableHeader } from '@/features/product-category/components/table/ProductCategoryTableHeader';
import { ProductCategoryTableFooter } from '@/features/product-category/components/table/ProductCategoryTableFooter';

export const DashboardStoreCategoryPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Store Category</title>
            </Head>
            <ProductCategoryTableHeader />
            <ProductCategoryTable />
            <ProductCategoryTableFooter />
        </>
    );
};

DashboardStoreCategoryPage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);
