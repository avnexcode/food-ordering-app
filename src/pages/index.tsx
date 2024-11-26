import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/features/product/api";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { type ReactElement } from "react";

export default function Home() {
  const { data } = useProducts()
  const { data: session } = useSession()
  console.log(session)
  return (
    <>
      <Head>
        <title>DisOrder Eats</title>
        <meta name="description" content="KAWAAAIIII" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello {session ? ', ' + session?.user.name : 'World'}</h1>
        <Button onClick={() => signIn()}>Login</Button>
        {session && <Button onClick={() => signOut()}>Logout</Button>}
      </main>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};