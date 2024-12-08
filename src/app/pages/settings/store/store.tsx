import { SettingStoreHeader } from '@/components/fragment/settings/SettingStoreHeader';
import { SettingLayout } from '@/components/layout/SettingLayout';
import Head from 'next/head';

export const SettingStorePage = () => {
    return (
        <>
            <Head>
                <title>Setting - Store</title>
            </Head>
            <SettingStoreHeader />
        </>
    );
};

SettingStorePage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
