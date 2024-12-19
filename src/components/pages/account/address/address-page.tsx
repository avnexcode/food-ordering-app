import Head from 'next/head';
import { AccountCreateAddressPage } from './create-address-page';
import { AccountLayout } from '@/components/layout/AccountLayout';

export const AccountAddressPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Address</title>
            </Head>
            <AccountCreateAddressPage />
        </>
    );
};

AccountAddressPage.getLayout = (page: React.ReactElement) => (
    <AccountLayout>{page}</AccountLayout>
);
