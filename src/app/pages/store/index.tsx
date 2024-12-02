import { MainLayout } from '@/components/layout/MainLayout';

export const StorePage = () => {
    return (
        <>
            <h1>Hello, Store</h1>
        </>
    );
};

StorePage.getLayout = (page: React.ReactElement) => (
    <MainLayout>{page}</MainLayout>
);
