import { useForm } from 'react-hook-form';
import { UpdateProductCategoryFormInner } from './UpdateProductCategoryFormInner';

import { useUpdateProductCategory } from '../../api/useUpdateProductCategory';
import { type UpdateProductCategoryFormSchema } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateAddressFormSchema } from '@/features/address/types';
import { useToast } from '@/hooks/use-toast';
import { useProductCategoriesId } from '../../api/useProductCategoryId';
import { Form } from '@/components/ui/form';
import { UpdateProductCategoryFormLayout } from '../layout/UpdateProductCategoryFormLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const UpdateProductCategorForm = () => {
    const router = useRouter();
    const { id } = router.query as { id: string };

    const { toast } = useToast();
    const { data: productCategory } = useProductCategoriesId(id);

    const {
        mutate: updateProductCategory,
        isPending: isUpdateProductCategoryPending,
    } = useUpdateProductCategory({
        id: productCategory?.id,
        onSuccess: async () => {
            toast({
                title: 'Success',
                description: 'Success update product category',
            });
            await router.push('/dashboard/store/product-category');
        },
        onError: async error => {
            toast({
                title: 'Error',
                variant: 'destructive',
                description: error.response?.data.error ?? error.message,
            });
        },
    });

    const form = useForm<UpdateProductCategoryFormSchema>({
        defaultValues: {
            name: '',
            description: '',
        },
        resolver: zodResolver(updateAddressFormSchema),
    });

    const onSubmit = (values: UpdateProductCategoryFormSchema) =>
        updateProductCategory(values);

    useEffect(() => {
        if (productCategory) {
            form.reset({
                name: productCategory?.name ?? '',
                description: productCategory?.description ?? '',
            });
        }
    }, [form, productCategory]);

    return (
        <UpdateProductCategoryFormLayout
            isPending={isUpdateProductCategoryPending}
        >
            <Form {...form}>
                <UpdateProductCategoryFormInner
                    form_id="update-product-category-form"
                    form={form}
                    onSubmit={onSubmit}
                />
            </Form>
        </UpdateProductCategoryFormLayout>
    );
};
