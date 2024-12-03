import { AuthLayout } from '@/components/layout/AuthLayout';
import { RegisterForm } from '@/features/auth/components/form/RegisterForm';

export const RegisterPage = () => {
    return <RegisterForm />;
};

RegisterPage.getLayout = (page: React.ReactElement) => {
    return <AuthLayout>{page}</AuthLayout>;
};
