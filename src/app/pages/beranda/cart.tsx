import { MainLayout } from '@/components/layout/MainLayout';
import { CartProductList } from '@/features/cart/components/CartProductList';
import Head from 'next/head';

export const CartPage = () => {
  return (
    <>
      <Head>
        <title>Foodzy - Cart</title>
      </Head>
      <CartProductList />
    </>
  );
};

CartPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;
