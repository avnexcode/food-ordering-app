import { SettingStoreHeader } from '@/components/fragment/account/SettingStoreHeader';
import { DashboardStoreLayout } from '@/components/layout/DashboardStoreLayout';
import Head from 'next/head';

export const DashboardStorePage = () => {
    return (
        <>
            <Head>
                <title>Dashboard - Store</title>
            </Head>
            <SettingStoreHeader />
        </>
    );
};

DashboardStorePage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);
