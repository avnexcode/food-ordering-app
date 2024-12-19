import { type UseFormReturn } from 'react-hook-form';
import type { CreateProductCategoryFormSchema } from '../../types';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type CreateProductCategoryForminnerProps = {
    form_id: string;
    form: UseFormReturn<CreateProductCategoryFormSchema>;
    onSubmit: (values: CreateProductCategoryFormSchema) => void;
};

export const CreateProductCategoryFormInner = (
    props: CreateProductCategoryForminnerProps,
) => {
    const { form_id, form, onSubmit } = props;

    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-5 w-full"
        >
            <div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Input name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>
            </div>
            <div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Input description"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>
            </div>
        </form>
    );
};
