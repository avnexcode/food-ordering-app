import { SettingLayout } from '@/components/layout/SettingLayout';
import { CreateStoreForm } from '@/features/settings/store/components/CreateStoreForm';
import Head from 'next/head';

export const SettingCreateStorePage = () => {
    return (
        <>
            <Head>
                <title>Setting - Create Store</title>
            </Head>
            <CreateStoreForm />
        </>
    );
};

SettingCreateStorePage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
