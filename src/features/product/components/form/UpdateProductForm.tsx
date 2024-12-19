import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { UpdateProductFormInner } from './UpdateProductFormInner';
import {
    updateProductFormSchema,
    type UpdateProductFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUpdateProduct } from '../../api/useUpdateProduct';
import { useToast } from '@/hooks/use-toast';
import { UpdateProductFormLayout } from '../../layout/UpdateProductFormLayout';
import { useRouter } from 'next/router';

export const UpdateProductForm = () => {
    const router = useRouter();
    const { id } = router.query as { id: string };

    const { toast } = useToast();
    const form = useForm<UpdateProductFormSchema>({
        defaultValues: {
            name: '',
            price: 0,
            description: '',
            images: [],
            stock: 0,
            weight: 0,
            category_id: '',
        },
        resolver: zodResolver(updateProductFormSchema),
    });

    const onSubmit = (values: UpdateProductFormSchema) => {
        console.log(values);
    };

    const { mutate: updateProduct, isPending: isUpdateProductPending } =
        useUpdateProduct({
            id,
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Success update product',
                });
            },
            onError: async error => {
                toast({
                    title: 'Error',
                    description: error.response?.data?.error ?? error.message,
                    variant: 'destructive',
                });
            },
        });

    return (
        <UpdateProductFormLayout isPending={isUpdateProductPending}>
            <Form {...form}>
                <UpdateProductFormInner
                    form_id="update-product-form"
                    form={form}
                    onSubmit={onSubmit}
                />
            </Form>
        </UpdateProductFormLayout>
    );
};
