import { AuthLayout } from "@/components/layout/AuthLayout"
import { RegisterForm } from "@/features/auth/components/RegisterForm"

export const RegisterPage = () => {
    return <RegisterForm />
}

RegisterPage.getLayout = (page: React.ReactElement) => {
    return <AuthLayout>{page}</AuthLayout>
}