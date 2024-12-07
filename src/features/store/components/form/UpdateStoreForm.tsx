import { useForm } from 'react-hook-form';
import { UpdateStoreFormInner } from './UpdateStoreFormInner';
import { updateStoreFormSchema, type UpdateStoreFormSchema } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';

export const UpdateStoreForm = () => {
    const form = useForm<UpdateStoreFormSchema>({
        defaultValues: {
            name: '',
        },
        resolver: zodResolver(updateStoreFormSchema),
    });

    const onsubmit = (values: UpdateStoreFormSchema) => console.log(values);

    return (
        <>
            <Form {...form}>
                <UpdateStoreFormInner
                    form_id="asd"
                    form={form}
                    onSubmit={onsubmit}
                />
            </Form>
        </>
    );
};
