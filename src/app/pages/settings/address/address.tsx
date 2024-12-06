import { SettingLayout } from '@/components/layout/SettingLayout';
import Head from 'next/head';

export const SettingAddressPage = () => {
    return (
        <>
            <Head>
                <title>Setting - Address</title>
            </Head>
            <div className="w-full">Hello Setting Address</div>
        </>
    );
};

SettingAddressPage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
