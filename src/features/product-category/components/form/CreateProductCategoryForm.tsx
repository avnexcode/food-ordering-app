import { Form } from '@/components/ui/form';
import { CreateProductCategoryFormInner } from './CreateProductCategoryFormInner';
import {
    createProductCategoryFormSchema,
    type CreateProductCategoryFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { useCreateProductCategory } from '../../api/useCreateProductCategory';
import { useStore } from '@/features/store/api/useStore';
type CreateProductFormProps = {
    setIsPending: (isPending: boolean) => void;
    setIsOpen: (isOpen: boolean) => void;
};

export const CreateProductCategoryForm = (props: CreateProductFormProps) => {
    const { setIsPending, setIsOpen } = props;
    const { toast } = useToast();
    const { refetch: storeRefetch } = useStore()
    const form = useForm<CreateProductCategoryFormSchema>({
        defaultValues: {
            name: '',
            description: '',
        },
        resolver: zodResolver(createProductCategoryFormSchema),
    });

    const onSubmit = (values: CreateProductCategoryFormSchema) => {
        setIsPending(isCreateProductPending);
        createProductCategory(values);
    };

    const { mutate: createProductCategory, isPending: isCreateProductPending } =
        useCreateProductCategory({
            onSuccess: async () => {
                setIsPending(isCreateProductPending);
                toast({
                    title: 'Success',
                    description: 'Success create product',
                });
                setIsOpen(false)
                await storeRefetch()
            },
            onError: async error => {
                toast({
                    title: 'Error',
                    description: error.response?.data?.error ?? error.message,
                    variant: 'destructive',
                });
            },
        })

    return (
        <Form {...form}>
            <CreateProductCategoryFormInner
                form_id="create-product-category-form"
                form={form}
                onSubmit={onSubmit}
            />
        </Form>
    );
};
