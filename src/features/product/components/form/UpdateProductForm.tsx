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

type UpdateProductFormProps = {
    setIsPending: (isPending: boolean) => void;
};

export const UpdateProductForm = (props: UpdateProductFormProps) => {
    const { setIsPending } = props;
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
        setIsPending(isUpdateProductPending);
        console.log(values);
    };

    const { mutate: updateProduct, isPending: isUpdateProductPending } =
        useUpdateProduct({
            onSuccess: async () => {
                setIsPending(isUpdateProductPending);
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
        <Form {...form}>
            <UpdateProductFormInner
                form_id="update-product-form"
                form={form}
                onSubmit={onSubmit}
            />
        </Form>
    );
};
