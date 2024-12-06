import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { updatePasswordSchema, type UpdatePasswordSchema } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdatePasswordFormInner } from './UpdatePasswordFormInner';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useUpdatePassword } from '../../api';
import { useToast } from '@/hooks/use-toast';
import { useProfile } from '../../api/useProfile';
import { AxiosError } from 'axios';

export const UpdatePasswordForm = () => {
    const { toast } = useToast();

    const { data: user } = useProfile();

    const form = useForm<UpdatePasswordSchema>({
        defaultValues: {
            password: '',
            new_password: '',
            confirm_password: '',
        },
        resolver: zodResolver(updatePasswordSchema),
    });

    const onSubmit = (values: UpdatePasswordSchema) =>
        updatePassword({ id: user?.id, values });

    const { mutate: updatePassword, isPending: isUpdatePasswordPending } =
        useUpdatePassword({
            onSuccess: () => {
                toast({
                    title: 'Success',
                    description: 'Success update passowrd',
                });
                form.reset();
            },
            onError: error => {
                toast({
                    title: 'Success',
                    description:
                        error.response?.data.error ??
                        error.message ??
                        'Invalid credentials',
                    variant: 'destructive',
                });
            },
        });

    return (
        <Card>
            <CardHeader className="gap-y-5">
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <UpdatePasswordFormInner
                        form_id="update-user-password"
                        form={form}
                        onSubmit={onSubmit}
                    />
                </Form>
            </CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button
                    form="update-user-password"
                    disabled={isUpdatePasswordPending}
                >
                    {isUpdatePasswordPending
                        ? 'Changing password...'
                        : 'Change password'}
                </Button>
            </CardFooter>
        </Card>
    );
};
