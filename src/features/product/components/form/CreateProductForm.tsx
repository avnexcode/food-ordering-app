import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { CreateProductFormInner } from './CreateProductFormInner';
import {
    createProductFormSchema,
    type CreateProductFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

type CreateProductFormProps = {
    setIsOpen: (isOpen: boolean) => void;
};

export const CreateProductForm = (props: CreateProductFormProps) => {
    const { setIsOpen } = props;
    const form = useForm<CreateProductFormSchema>({
        defaultValues: {
            name: '',
            price: 0,
            description: '',
            stock: 0,
            weight: 0,
            category_id: '',
            images: [],
        },
        resolver: zodResolver(createProductFormSchema),
    });

    const onSubmit = (values: CreateProductFormSchema) => console.log(values);

    return (
        <Card className="border-none shadow-none">
            <CardContent>
                <Form {...form}>
                    <CreateProductFormInner
                        form_id="create-product-form"
                        form={form}
                        onSubmit={onSubmit}
                    />
                </Form>
            </CardContent>
            <CardFooter className="place-content-end gap-5">
                <Button
                    size={'sm'}
                    variant={'default'}
                    onClick={() => setIsOpen(false)}
                >
                    Cancel
                </Button>
                <Button
                    size={'sm'}
                    variant={'default'}
                    form="create-product-form"
                >
                    Add
                </Button>
            </CardFooter>
        </Card>
    );
};
