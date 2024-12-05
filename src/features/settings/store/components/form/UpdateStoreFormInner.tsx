import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type UseFormReturn } from 'react-hook-form';
import { type UpdateStoreFormSchema } from '../../types';

type UpdateStoreFormInnerProps = {
    form_id: string;
    form: UseFormReturn<UpdateStoreFormSchema>;
    onSubmit: (values: UpdateStoreFormSchema) => void;
};

export const UpdateStoreFormInner = (props: UpdateStoreFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    return (
        <form id={form_id} onSubmit={form.handleSubmit(onSubmit)}>
            <div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-2">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </form>
    );
};
