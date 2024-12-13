import { AccountLayout } from '@/components/layout/AccountLayout';
import { AddressList } from '@/features/address/components/AddressList';
import Head from 'next/head';

export const AccountCreateAddressPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Address</title>
            </Head>
            <main className="flex flex-col gap-3">
                <AddressList />
            </main>
        </>
    );
};

AccountCreateAddressPage.getLayout = (page: React.ReactElement) => (
    <AccountLayout>{page}</AccountLayout>
);
