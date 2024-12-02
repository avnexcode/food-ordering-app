import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { UpdateProfileFormInner } from './UpdateProfileFormInner';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import type { UpdateProfileSchema } from '../types';
import { useUserById } from '../../user/api/useUserById';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const UpdateProfileForm = () => {
    const { data: session } = useSession();

    const { data: user } = useUserById(session?.user?.id, session?.user?.token);

    const form = useForm<UpdateProfileSchema>({
        defaultValues: {
            username: '',
            name: '',
            email: '',
        },
    });

    const onSubmit = (values: UpdateProfileSchema) => console.log(values);

    useEffect(() => {
        if (user) {
            form.setValue('username', user.username);
            form.setValue('name', user.name);
            form.setValue('email', user.email);
        }
    }, [form, user]);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl capitalize">
                    Display Name
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <Avatar className="w-28 h-28">
                    <AvatarImage src="https://placehold.co/400x400" alt={''} />
                    <AvatarFallback>{''}</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                    Upload Foto
                </Button>
                <Form {...form}>
                    <UpdateProfileFormInner form={form} onSubmit={onSubmit} />
                </Form>
            </CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button>Simpan</Button>
            </CardFooter>
        </Card>
    );
};
