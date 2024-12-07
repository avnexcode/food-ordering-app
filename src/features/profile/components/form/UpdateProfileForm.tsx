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
import { updateProfileSchema, type UpdateProfileSchema } from '../../types';
import { useEffect } from 'react';
import { useUpdateProfile } from '../../api';
import { useToast } from '@/hooks/use-toast';
import { UpdateProfileImageForm } from './UpdateProfileImageForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProfile } from '../../api/useProfile';

export const UpdateProfileForm = () => {
    const { toast } = useToast();
    const { data: user } = useProfile();

    const { mutate: updateProfile, isPending: isUpdateProfilePending } =
        useUpdateProfile({
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

    const onSubmit = (values: UpdateProfileSchema) =>
        updateProfile({ id: user?.id, values });

    useEffect(() => {
        if (user) {
            form.reset({
                username: user.username,
                name: user.name,
                email: user.email,
            });
        }
    }, [form, user]);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl capitalize">
                    {user?.name}
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
