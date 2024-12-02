import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type UseFormReturn } from 'react-hook-form';

type CreateStoreFormInnerProps = {
    form_id: string;
    form: UseFormReturn<{ name: string }>;
    onSubmit: (values: { name: string }) => void;
};

export const CreateStoreFormInner = (props: CreateStoreFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    return (
        <form id={form_id} onSubmit={form.handleSubmit(onSubmit)}>
            <div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
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
