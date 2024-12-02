import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CreateStoreFormInner } from './CreateStoreFormInner';
import { Button } from '@/components/ui/button';
import { useCreateStore } from '../api/useCreateStore';
import { useSession } from 'next-auth/react';
import { useUserById } from '../../user/api/useUserById';
import { useUpdateUser } from '@/features/user/api/useUpdateUser';
import { UserRole } from '@prisma/client';
import { useToast } from '@/hooks/use-toast';

export const CreateStoreForm = () => {
    const { data: session } = useSession();
    const { toast } = useToast();

    const { data: user } = useUserById({
        id: session?.user.id,
        token: session?.user.token,
    });

    const { mutate: updateUser } = useUpdateUser({
        id: user?.id,
        token: user?.token,
    });

    const { mutate: createStore, isPending: isCreateStorePending } =
        useCreateStore({
            onSuccess: () => {
                updateUser({ role: UserRole.SELLER });
                toast({
                    title: 'Success',
                    description: 'Success create store',
                });
            },
        });

    const form = useForm<{ name: string }>({
        defaultValues: {
            name: '',
        },
        resolver: zodResolver(z.object({ name: z.string() })),
    });

    const onSubmit = (values: { name: string }) => {
        createStore(values);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <CreateStoreFormInner
                        form_id="create-store"
                        form={form}
                        onSubmit={onSubmit}
                    />
                </Form>
            </CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button form="create-store" disabled={isCreateStorePending}>
                    {isCreateStorePending ? 'Creating...' : 'Create'}
                </Button>
            </CardFooter>
        </Card>
    );
};
