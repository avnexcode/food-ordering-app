import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { CreateProductFormInner } from './CreateProductFormInner';
import {
    createProductFormSchema,
    type CreateProductFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateProductDialog } from '../dialog/CreateProductDialog';
import { useCreateProduct } from '../../api/useCreateProduct';
import { useToast } from '@/hooks/use-toast';

type CreateProductFormProps = {
    setIsPending: (isPending: boolean) => void;
};

export const CreateProductForm = (props: CreateProductFormProps) => {
    const { setIsPending } = props;
    const { toast } = useToast();
    const form = useForm<CreateProductFormSchema>({
        defaultValues: {
            name: '',
            price: 0,
            description: '',
            images: [],
            stock: 0,
            weight: 0,
            category_id: '',
        },
        resolver: zodResolver(createProductFormSchema),
    });

    const onSubmit = (values: CreateProductFormSchema) => {
        setIsPending(isCreateProductPending);
        console.log(values);
    };

    const { mutate: createProduct, isPending: isCreateProductPending } =
        useCreateProduct({
            onSuccess: async () => {
                setIsPending(isCreateProductPending);
                toast({
                    title: 'Success',
                    description: 'Success create product',
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
            <CreateProductFormInner
                form_id="create-product-form"
                form={form}
                onSubmit={onSubmit}
            />
        </Form>
    );
};
