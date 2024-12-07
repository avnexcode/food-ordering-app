import { SettingLayout } from '@/components/layout/SettingLayout';
import Head from 'next/head';
import { SettingCreateAddressPage } from './create-address';

export const SettingAddressPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Address</title>
            </Head>
            <SettingCreateAddressPage />
        </>
    );
};

SettingAddressPage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
