import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CreateStoreFormInner } from './CreateStoreFormInner';
import { useCreateStore } from '../../api/useCreateStore';
import { useToast } from '@/hooks/use-toast';
import { createStoreFormSchema, type CreateStoreFormSchema } from '../../types';
import { CreateStoreFormLayout } from '../../layout/CreateStoreFormLayout';

export const CreateStoreForm = () => {
    const { toast } = useToast();

    const { mutate: createStore, isPending: isCreateStorePending } =
        useCreateStore({
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Success create store',
                });
            },
            onError: async () => {
                toast({
                    title: 'Error',
                    variant: 'destructive',
                    description: 'Error create store',
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
        <CreateStoreFormLayout isPending={isCreateStorePending}>
            <Form {...form}>
                <CreateStoreFormInner
                    form_id="create-store-form"
                    form={form}
                    onSubmit={onSubmit}
                />
            </Form>
        </CreateStoreFormLayout>
    );
};
