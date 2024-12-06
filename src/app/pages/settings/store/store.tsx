import { SettingLayout } from '@/components/layout/SettingLayout';
import Head from 'next/head';

export const SettingStorePage = () => {
    return (
        <>
            <Head>
                <title>Setting - Store</title>
            </Head>
            <div className="w-full">Hello Setting Store</div>
        </>
    );
};

SettingStorePage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
