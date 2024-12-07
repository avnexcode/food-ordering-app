import { type UseFormReturn } from 'react-hook-form';
import { type UpdateAddressFormSchema } from '../../types';

type UpdateAddressFormInnerProps = {
    form_id: string;
    form: UseFormReturn<UpdateAddressFormSchema>;
    onSubmit: (values: UpdateAddressFormSchema) => void;
};

export const UpdateAddressFormInner = (props: UpdateAddressFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    return (
        <form id={form_id} onSubmit={form.handleSubmit(onSubmit)}>
            <div></div>
        </form>
    );
};
