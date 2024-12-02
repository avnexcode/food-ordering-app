import { SettingLayout } from '@/components/layout/SettingLayout';
import Head from 'next/head';

export const SettingCreateStorePage = () => {
    return (
        <>
            <Head>
                <title>Setting - Create Store</title>
            </Head>
            <>Create Store Page</>
        </>
    );
};

SettingCreateStorePage.getLayout = (page: React.ReactElement) => (
    <SettingLayout>{page}</SettingLayout>
);
