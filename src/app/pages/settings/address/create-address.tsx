import { SettingLayout } from '@/components/layout/SettingLayout';
import { CreateAddressForm } from '@/features/address/components/form/CreateAddressForm';
import Head from 'next/head';

export const SettingCreateAddressPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Address</title>
            </Head>
            <CreateAddressForm/>
        </>
    );
};

SettingCreateAddressPage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
