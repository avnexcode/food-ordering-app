import { MainLayout } from "@/components/layout/MainLayout"

export const StorePage = () => {
    return (
        <>
            <h1>Hello, Store</h1>
        </>
    )
}

StorePage.getLayout = (page: React.ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}