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
import { CreateStoreFormInner } from './CreateStoreFormInner';
import { Button } from '@/components/ui/button';
import { useCreateStore } from '../../api/useCreateStore';
import { UserRole } from '@prisma/client';
import { useToast } from '@/hooks/use-toast';
import { createStoreFormSchema, type CreateStoreFormSchema } from '../../types';
import { useProfile } from '@/features/profile/api/useProfile';
import { useUpdateUser } from '@/features/user/api/useUpdateUser';

export const CreateStoreForm = () => {
    const { toast } = useToast();

    const { data: user } = useProfile();

    const { mutate: updateUser } = useUpdateUser({});

    const { mutate: createStore, isPending: isCreateStorePending } =
        useCreateStore({
            onSuccess: () => {
                updateUser({ id: user?.id, values: { role: UserRole.SELLER } });
                toast({
                    title: 'Success',
                    description: 'Success create store',
                });
            },
        });

    const form = useForm<CreateStoreFormSchema>({
        defaultValues: {
            name: '',
            description: '',
        },
        resolver: zodResolver(createStoreFormSchema),
    });

    const onSubmit = (values: CreateStoreFormSchema) => {
        createStore(values);
    };

    return (
        <Card className='border-none'>
            <CardHeader  className="gap-y-5">
                <CardTitle>Create Store</CardTitle>
                <CardDescription>Enter your store details to get started.</CardDescription>
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
