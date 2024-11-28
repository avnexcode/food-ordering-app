import { MainLayout } from "@/components/layout/MainLayout"
import { useSession } from "next-auth/react"

export const ProfilePage = () => {
    const { data: session } = useSession()
    return (
        <>
            <h1 className="capitalize">Hello, {session?.user.name}</h1>
        </>
    )
}

ProfilePage.getLayout = (page: React.ReactElement) => {
    return <MainLayout>{page}</MainLayout>
}