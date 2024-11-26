import { AuthLayout } from "@/components/layout/AuthLayout"
import { LoginForm } from "@/features/auth/components/LoginForm"

export const LoginPage = () => {
    return <LoginForm />
}

LoginPage.getLayout = (page: React.ReactElement) => {
    return <AuthLayout>{page}</AuthLayout>
}