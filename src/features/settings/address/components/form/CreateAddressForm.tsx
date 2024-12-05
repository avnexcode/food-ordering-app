import { useForm } from 'react-hook-form';
import {
    createAddressFormSchema,
    type CreateAddressFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { CreateAddressFormInner } from './CreateAddressFormInner';

export const CreateAddressForm = () => {
    const form = useForm<CreateAddressFormSchema>({
        defaultValues: {
            label: '',
        },
        resolver: zodResolver(createAddressFormSchema),
    });

    const onSubmit = (values: CreateAddressFormSchema) => console.log(values);

    return (
        <>
            <Form {...form}>
                <CreateAddressFormInner
                    form_id=""
                    form={form}
                    onSubmit={onSubmit}
                />
            </Form>
        </>
    );
};
