import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { CreateProductFormInner } from './CreateProductFormInner';
import {
    createProductFormSchema,
    type CreateProductFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateProduct } from '../../api/useCreateProduct';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useStore } from '@/features/store/api/useStore';

type CreateProductFormProps = {
    setIsPending: (isPending: boolean) => void;
    setIsOpen: (isOpen: boolean) => void;
};

export const CreateProductForm = (props: CreateProductFormProps) => {
    const { setIsPending, setIsOpen } = props;
    const { toast } = useToast();
    const { refetch: storeRefetch } = useStore();

    const form = useForm<CreateProductFormSchema>({
        defaultValues: {
            name: '',
            price: 0,
            description: '',
            stock: 0,
            weight: 0,
            category_id: '',
        },
        resolver: zodResolver(createProductFormSchema),
    });

    const onSubmit = (values: CreateProductFormSchema) => {
        setIsPending(isCreateProductPending);
        createProduct(values);
    };

    const { mutate: createProduct, isPending: isCreateProductPending } =
        useCreateProduct({
            onMutate: async () => {
                setIsPending(isCreateProductPending);
            },
            onSuccess: async () => {
                await storeRefetch();
                setIsOpen(false);
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
                setIsOpen(false);
            },
        });

    useEffect(() => {
        if (!isCreateProductPending) {
            setIsPending(false);
        }
    }, [isCreateProductPending, setIsPending]);

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
