import { AccountLayout } from '@/components/layout/AccountLayout';
import { UpdatePasswordForm } from '@/features/auth/components/form/UpdatePasswordForm';
// import { UpdatePasswordForm } from '@/features/settings/profile/components/form/UpdatePasswordForm';
import Head from 'next/head';

export const SettingPasswordPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Password</title>
            </Head>
            <UpdatePasswordForm />
        </>
    );
};

SettingPasswordPage.getLayout = (page: React.ReactElement) => (
    <AccountLayout>{page}</AccountLayout>
);
