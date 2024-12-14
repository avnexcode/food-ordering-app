import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRegister } from '../../api/useRegister';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import {
    registerFormSchema,
    type RegisterFormSchema,
} from '@/features/auth/types';
import { RegisterFormInner } from './RegisterFormInner';
import { Form } from '@/components/ui/form';
import { RegisterFormLayout } from '../layout/RegisterFormLayout';

export const RegisterForm = () => {
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<RegisterFormSchema>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        resolver: zodResolver(registerFormSchema),
    });

    const onSubmit = (values: RegisterFormSchema) => register(values);

    const { mutate: register, isPending: signUpPending } = useRegister({
        onSuccess: async () => {
            toast({
                title: 'Success',
                description: 'Register Successfully',
            });
            router.push('/auth/login');
        },
        onError: async error => {
            toast({
                title: 'Register Error',
                description:
                    error.response?.data?.error ??
                    error.message ??
                    'Invalid Credentials',
                variant: 'destructive',
            });
        },
    });

    return (
        <RegisterFormLayout isPending={signUpPending}>
            <Form {...form}>
                <RegisterFormInner
                    form_id="register-form"
                    form={form}
                    onSubmit={onSubmit}
                />
            </Form>
        </RegisterFormLayout>
    );
};
