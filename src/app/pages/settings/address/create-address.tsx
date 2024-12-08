import { SettingLayout } from '@/components/layout/SettingLayout';
import { AddressList } from '@/features/address/components/AddressList';
import Head from 'next/head';

export const SettingCreateAddressPage = () => {
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

SettingCreateAddressPage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
