import { SettingLayout } from '@/components/layout/SettingLayout';
import { UpdateProfileForm } from '@/features/profile/components/form/UpdateProfileForm';
import Head from 'next/head';

export const SettingProfilePage = () => {
    return (
        <>
            <Head>
                <title>Setting - Profile</title>
            </Head>
            <UpdateProfileForm />
        </>
    );
};

SettingProfilePage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
