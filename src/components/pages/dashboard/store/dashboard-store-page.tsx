import { DashboardStoreLayout } from '@/components/layout/DashboardStoreLayout';
import { UpdateStoreForm } from '@/features/store/components/form/UpdateStoreForm';
import Head from 'next/head';

export const DashboardStorePage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Store</title>
            </Head>
            <UpdateStoreForm />
        </>
    );
};

DashboardStorePage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);
