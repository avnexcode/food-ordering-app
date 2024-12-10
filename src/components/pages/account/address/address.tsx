import Head from 'next/head';
import { SettingCreateAddressPage } from './create-address';
import { AccountLayout } from '@/components/layout/AccountLayout';

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
    <AccountLayout>{page}</AccountLayout>
);
