import { MainLayout } from "@/components/layout/MainLayout";
import Head from "next/head";

export const HomePage = () => {
    return (
        <>
            <Head>
                <title>DisOrder Eats</title>
                <meta name="description" content="KAWAAAIIII" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-[80vh] max-h-screen flex items-center justify-center">
                <h1 className="text-8xl">Hello World</h1>
            </main>
        </>
    )
}

HomePage.getLayout = (page: React.ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};