import { useForm } from 'react-hook-form';
import {
    createAddressFormSchema,
    type CreateAddressFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { CreateAddressFormInner } from './CreateAddressFormInner';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type CreateAddressFormProps = {
    setIsOpen: (isOpen: boolean) => void;
};

export const CreateAddressForm = (props: CreateAddressFormProps) => {
    const { setIsOpen } = props;
    const form = useForm<CreateAddressFormSchema>({
        defaultValues: {
            label: '',
        },
        resolver: zodResolver(createAddressFormSchema),
    });

    const onSubmit = (values: CreateAddressFormSchema) => console.log(values);

    return (
        <Card className="border-none shadow-none">
            <CardContent>
                <Form {...form}>
                    <CreateAddressFormInner
                        form_id=""
                        form={form}
                        onSubmit={onSubmit}
                    />
                </Form>
            </CardContent>
            <CardFooter className="w-full flex justify-end p-5 gap-4">
                <Button size={'sm'} onClick={() => setIsOpen(false)}>
                    Cancel
                </Button>
                <Button size={'sm'}>Add</Button>
            </CardFooter>
        </Card>
    );
};
