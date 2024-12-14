import { useForm } from 'react-hook-form';
import {
    updatePasswordSchema,
    type UpdatePasswordSchema,
} from '../../../profile/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdatePasswordFormInner } from './UpdatePasswordFormInner';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useUpdatePassword } from '../../api';
import { useAuth } from '../../api/useAuth';
import { UpdatePasswordFormLayout } from '../layout/UpdatePasswordFormLayout';

export const UpdatePasswordForm = () => {
    const { toast } = useToast();
    const { data: user } = useAuth();

    const form = useForm<UpdatePasswordSchema>({
        defaultValues: {
            password: '',
            new_password: '',
            confirm_password: '',
        },
        resolver: zodResolver(updatePasswordSchema),
    });

    const onSubmit = (values: UpdatePasswordSchema) => updatePassword(values);

    const { mutate: updatePassword, isPending: isUpdatePasswordPending } =
        useUpdatePassword({
            id: user?.id,
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Success update passowrd',
                });
                form.reset();
            },
            onError: async error => {
                toast({
                    title: 'Success',
                    variant: 'destructive',
                    description:
                        error.response?.data.error ??
                        error.message ??
                        'Invalid credentials',
                });
            },
        });

    return (
        <UpdatePasswordFormLayout isPending={isUpdatePasswordPending}>
            <Form {...form}>
                <UpdatePasswordFormInner
                    form_id="update-user-password"
                    form={form}
                    onSubmit={onSubmit}
                />
            </Form>
        </UpdatePasswordFormLayout>
    );
};
