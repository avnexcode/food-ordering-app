import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {  UseFormReturn } from 'react-hook-form';
import { UpdateProductCategoryFormSchema } from '../../types';
type UpdateProfileFormInnerProps = {
    form_id: string;
    form: UseFormReturn<UpdateProductCategoryFormSchema>;
    onSubmit: (values: UpdateProductCategoryFormSchema) => void;
};

export const UpdateProductCategoryFormInner = (props: UpdateProfileFormInnerProps) => {
    const { form_id, form, onSubmit } = props;

    return (
            <form
                id={form_id}
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Input product name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Input product description"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
    );
};
