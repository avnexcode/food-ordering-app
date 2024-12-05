import { useForm } from 'react-hook-form';
import {
    updateAddressFormSchema,
    type UpdateAddressFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { UpdateAddressFormInner } from './UpdateAddressFormInner';

export const UpdateAddressForm = () => {
    const form = useForm<UpdateAddressFormSchema>({
        defaultValues: {
            label: '',
        },
        resolver: zodResolver(updateAddressFormSchema),
    });

    const onSubmit = (values: UpdateAddressFormSchema) => console.log(values);

    return (
        <Form {...form}>
            <UpdateAddressFormInner
                form_id={''}
                form={form}
                onSubmit={onSubmit}
            />
        </Form>
    );
};
