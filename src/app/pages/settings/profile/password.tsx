import { SettingLayout } from '@/components/layout/SettingLayout';
import { UpdatePasswordForm } from '@/features/settings/profile/components/form/UpdatePasswordForm';
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
    <SettingLayout>{page}</SettingLayout>
);
