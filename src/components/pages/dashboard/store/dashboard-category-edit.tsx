import Head from "next/head";
import { DashboardStoreLayout } from "@/components/layout/DashboardStoreLayout";
import { UpdateProductCategorForm } from "@/features/product-category/components/form/UpdateProductCategoryForm";

export const DashboardStoreCategoryEditPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Store Category</title>
            </Head>
            <main>
                <UpdateProductCategorForm />
            </main>
        </>
    );
};

DashboardStoreCategoryEditPage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);