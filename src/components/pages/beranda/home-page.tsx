import { MainLayout } from '@/components/layout/MainLayout';
import Head from 'next/head';
import { MainHero } from '@/components/fragment/home/MainHero';
import { DiscountBanner } from '@/components/fragment/home/DiscountBanner';
import { NavHero } from '@/components/fragment/home/NavHero';
import { NavProductList } from '@/components/fragment/home/NavProductList';
import { MainProductList } from '@/components/fragment/home/MainProductList';

export const HomePage = () => {
    return (
        <>
            <Head>
                <title>Foodzy</title>
            </Head>
            <main className="px-20 pt-10">
                <header className="flex gap-10">
                    <MainHero />
                    <DiscountBanner />
                </header>
                <nav className="mt-10">
                    <NavHero />
                </nav>
                <section className="flex flex-col gap-2 mt-10">
                    <NavProductList />
                    <MainProductList />
                </section>
            </main>
        </>
    );
};

HomePage.getLayout = (page: React.ReactElement) => (
    <MainLayout>{page}</MainLayout>
);
