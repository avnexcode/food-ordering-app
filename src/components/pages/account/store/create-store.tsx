import { AccountLayout } from '@/components/layout/AccountLayout';
import { CreateStoreForm } from '@/features/store/components/form/CreateStoreForm';
import Head from 'next/head';

export const AccountCreateStorePage = () => {
    return (
        <>
            <Head>
                <title>Setting - Create Store</title>
            </Head>
            <CreateStoreForm />
        </>
    );
};

AccountCreateStorePage.getLayout = (page: React.ReactElement) => (
    <AccountLayout>{page}</AccountLayout>
);
