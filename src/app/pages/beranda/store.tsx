import { MainLayout } from '@/components/layout/MainLayout';
import { StoreHeader } from '@/features/store/components/StoreHeader';
import { StoreProduct } from '@/features/store/components/StoreProduct';

export const StorePage = () => {
    return (
        <div className="w-full flex justify-center">
            <main className="w-[80%] flex flex-col gap-[50px]">
                <header>
                    <StoreHeader />
                </header>
                <section>
                    <StoreProduct />
                </section>
            </main>
        </div>
    );
};

StorePage.getLayout = (page: React.ReactElement) => (
    <MainLayout>{page}</MainLayout>
);
