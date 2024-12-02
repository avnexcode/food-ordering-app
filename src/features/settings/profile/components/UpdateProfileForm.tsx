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
import { updateProfileSchema, type UpdateProfileSchema } from '../types';
import { useUserById } from '../../user/api/useUserById';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useUpdateProfile } from '../api';
import { useToast } from '@/hooks/use-toast';
import { UpdateProfileImageForm } from './UpdateProfileImageForm';
import { zodResolver } from '@hookform/resolvers/zod';

export const UpdateProfileForm = () => {
    const { toast } = useToast();
    const { data: session } = useSession();

    const { data: user } = useUserById(session?.user?.id, session?.user?.token);

    const { mutate: updateProfile, isPending: isUpdateProfilePending } =
        useUpdateProfile({
            id: user?.id,
            token: user?.token,
            onSuccess: () => {
                toast({
                    title: 'Success',
                    description: 'Success update profile',
                });
            },
        });

    const form = useForm<UpdateProfileSchema>({
        defaultValues: {
            username: '',
            name: '',
            email: '',
        },
        resolver: zodResolver(updateProfileSchema),
    });

    const onSubmit = (values: UpdateProfileSchema) => updateProfile(values);

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
                    {session?.user.name}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <UpdateProfileImageForm />
                <Form {...form}>
                    <UpdateProfileFormInner
                        form_id="update-user-profile"
                        form={form}
                        onSubmit={onSubmit}
                    />
                </Form>
            </CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button
                    form="update-user-profile"
                    disabled={isUpdateProfilePending}
                >
                    {isUpdateProfilePending ? 'Updating...' : 'Update'}
                </Button>
            </CardFooter>
        </Card>
    );
};
