import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, type LoginFormSchema } from '../../types';
import { useLogin } from '../../api/useLogin';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { LoginFormInner } from './LoginFormInner';
import { Form } from '@/components/ui/form';
import { LoginFormLayout } from '../layout/LoginFormLayout';

export const LoginForm = () => {
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<LoginFormSchema>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(loginFormSchema),
    });

    const onSubmit = (values: LoginFormSchema) =>
        login({ ...values, callbackUrl: '' });

    const { mutate: login, isPending: signInPending } = useLogin({
        onSuccess: async () => {
            toast({
                title: 'Success',
                description: 'Login Successfully',
            });
            router.push('/');
        },
        onError: async error => {
            toast({
                title: 'Login Error',
                description:
                    error.response?.data.message ??
                    error.message ??
                    'Invalid credentials',
                variant: 'destructive',
            });
        },
    });

    return (
        <LoginFormLayout isPending={signInPending}>
            <Form {...form}>
                <LoginFormInner
                    form_id="login-form"
                    form={form}
                    onSubmit={onSubmit}
                />
            </Form>
        </LoginFormLayout>
    );
};
