import { MainLayout } from '@/components/layout/MainLayout';
import { StoreHeader } from '@/features/store/components/StoreHeader';
import { StoreProduct } from '@/features/store/components/StoreProduct';
import { useRouter } from 'next/router';

export const StorePage = () => {
    const router = useRouter();
    const { id } = router.query as { id: string };

    return (
        <div className="w-full flex justify-center">
            <main className="w-[80%] flex flex-col">
                <header>
                    <StoreHeader storeId={id} />
                </header>
                <section>
                    <StoreProduct storeId={id} />
                </section>
            </main>
        </div>
    );
};

StorePage.getLayout = (page: React.ReactElement) => (
    <MainLayout>{page}</MainLayout>
);
