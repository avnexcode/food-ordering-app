import { type UseFormReturn } from 'react-hook-form';
import { type CreateAddressFormSchema } from '../../types';

type CreateAddressFormInnerProps = {
    form_id: string;
    form: UseFormReturn<CreateAddressFormSchema>;
    onSubmit: (values: CreateAddressFormSchema) => void;
};
export const CreateAddressFormInner = (props: CreateAddressFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    return (
        <form id={form_id} onSubmit={form.handleSubmit(onSubmit)}>
            <div></div>
        </form>
    );
};
