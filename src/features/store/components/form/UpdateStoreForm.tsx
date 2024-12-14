import { useForm } from 'react-hook-form';
import { UpdateStoreFormInner } from './UpdateStoreFormInner';
import { updateStoreFormSchema, type UpdateStoreFormSchema } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { UpdateStoreFormLayout } from '../../layout/UpdateStoreFormLayout';
import { useToast } from '@/hooks/use-toast';
import { useUpdateStore } from '../../api/useUpdateStore';
import { useAuth } from '@/features/auth/api/useAuth';
import { UpdateStoreImageForm } from './UpdateStoreImageForm';
import { useEffect } from 'react';

export const UpdateStoreForm = () => {
    const { toast } = useToast();
    const { data: user } = useAuth();
    
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

    const { mutate: updateStore, isPending: isUpdateStoreSettingPending } =
        useUpdateStore({
            id: user?.store_id ?? undefined,
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
        if (user) {
            form.reset({
                name: user.store?.name,
                description: user.store?.description,
                bank_name: user.store?.bank_name,
                bank_account: user.store?.bank_account,
                bank_holder: user.store?.bank_holder,
            });
        }
    }, [form, user]);

    return (
        <UpdateStoreFormLayout isPending={isUpdateStoreSettingPending}>
            <UpdateStoreImageForm />
            <Form {...form}>
                <UpdateStoreFormInner
                    form_id="update-store-setting"
                    form={form}
                    onSubmit={onsubmit}
                />
            </Form>
        </UpdateStoreFormLayout>
    );
};
