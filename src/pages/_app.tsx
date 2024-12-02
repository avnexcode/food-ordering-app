import { Poppins } from 'next/font/google';
import { type AppProps, type AppType } from 'next/app';

import '@/styles/globals.css';
import { AppProviders } from '@/components/layout/Providers';
import { type NextPage } from 'next';
import { Toaster } from '@/components/ui/toaster';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
});

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? (page => page);
    return (
        <div className={poppins.className}>
            <AppProviders>
                {getLayout(<Component {...pageProps} />)}
            </AppProviders>
            <Toaster />
        </div>
    );
};

export default MyApp;
