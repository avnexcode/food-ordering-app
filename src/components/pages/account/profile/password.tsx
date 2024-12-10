import { AccountLayout } from '@/components/layout/AccountLayout';
import { UpdatePasswordForm } from '@/features/auth/components/form/UpdatePasswordForm';
// import { UpdatePasswordForm } from '@/features/settings/profile/components/form/UpdatePasswordForm';
import Head from 'next/head';

export const AccountPasswordPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Password</title>
            </Head>
            <UpdatePasswordForm />
        </>
    );
};

AccountPasswordPage.getLayout = (page: React.ReactElement) => (
    <AccountLayout>{page}</AccountLayout>
);
