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
import { use, useEffect } from 'react';
import { useProductId } from '../../api';

export const UpdateProductForm = () => {
    const router = useRouter();
    const { id } = router.query as { id: string };

    const { toast } = useToast();
    const { data: product } = useProductId(id);
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
        updateProduct(values);
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

    useEffect(() => {
        if (product) {
            form.reset({
                name: product?.name ?? '',
                price: product?.price ?? 0,
                description: product?.description ?? '',
                stock: product?.stock ?? 0,
                weight: product?.weight ?? 0,
                category_id: product?.category_id ?? '',
            })
        }
    }, [form, product]);

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
