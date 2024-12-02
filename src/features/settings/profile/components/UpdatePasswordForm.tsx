import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { updatePasswordSchema, type UpdatePasswordSchema } from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdatePasswordFormInner } from './UpdatePasswordFormInner';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

export const UpdatePasswordForm = () => {
    const form = useForm<UpdatePasswordSchema>({
        defaultValues: {
            password: '',
            new_password: '',
            new_password_confirm: '',
        },
        resolver: zodResolver(updatePasswordSchema),
    });

    const onSubmit = (values: UpdatePasswordSchema) => console.log(values);
    return (
        <Card>
            <CardHeader className="gap-y-5">
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <UpdatePasswordFormInner form={form} onSubmit={onSubmit} />
                </Form>
            </CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button>Change Password</Button>
            </CardFooter>
        </Card>
    );
};
