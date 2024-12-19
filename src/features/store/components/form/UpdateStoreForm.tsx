import { useForm } from 'react-hook-form';
import { UpdateStoreFormInner } from './UpdateStoreFormInner';
import { updateStoreFormSchema, type UpdateStoreFormSchema } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { UpdateStoreFormLayout } from '../../layout/UpdateStoreFormLayout';
import { useToast } from '@/hooks/use-toast';
import { useUpdateStore } from '../../api/useUpdateStore';
import { UpdateStoreImageForm } from './UpdateStoreImageForm';
import { useEffect } from 'react';
import { useStore } from '../../api/useStore';

export const UpdateStoreForm = () => {
    const { toast } = useToast();
    const { data: store } = useStore();
    console.log(store);

    const form = useForm<UpdateStoreFormSchema>({
        defaultValues: {
            name: '',
            description: '',
            bank_name: '',
            bank_account: '',
            bank_holder: '',
        },
        resolver: zodResolver(updateStoreFormSchema),
    });

    const onsubmit = (values: UpdateStoreFormSchema) => updateStore(values);

    const { mutate: updateStore, isPending: isUpdateStorePending } =
        useUpdateStore({
            id: store?.id ?? undefined,
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Success update store setting',
                });
            },
            onError: async error => {
                toast({
                    title: 'Success',
                    variant: 'destructive',
                    description: error.response?.data.error ?? error.message,
                });
            },
        });

    useEffect(() => {
        if (store) {
            form.reset({
                name: store?.name,
                description: store?.description ?? '',
                bank_name: store?.bank_name ?? '',
                bank_account: store?.bank_account ?? '',
                bank_holder: store?.bank_holder ?? '',
            });
        }
    }, [form, store]);

    return (
        <UpdateStoreFormLayout isPending={isUpdateStorePending}>
            <UpdateStoreImageForm />
            <Form {...form}>
                <UpdateStoreFormInner
                    form_id="update-store-form"
                    form={form}
                    onSubmit={onsubmit}
                />
            </Form>
        </UpdateStoreFormLayout>
    );
};
