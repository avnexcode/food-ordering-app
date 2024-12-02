import { MainLayout } from '@/components/layout/MainLayout';
import Head from 'next/head';
import { MainHero } from '@/components/fragment/home/MainHero';
import { DiscountBanner } from '@/components/fragment/home/DiscountBanner';
import { NavHero } from '@/components/fragment/home/NavHero';

export const HomePage = () => {
    return (
        <>
            <Head>
                <title>Foodzy</title>
            </Head>
            <main className="px-20">
                <header className="flex gap-10">
                    <MainHero />
                    <DiscountBanner />
                </header>
                <nav className="mt-10">
                    <NavHero />
                </nav>
            </main>
        </>
    );
};

HomePage.getLayout = (page: React.ReactElement) => (
    <MainLayout>{page}</MainLayout>
);
