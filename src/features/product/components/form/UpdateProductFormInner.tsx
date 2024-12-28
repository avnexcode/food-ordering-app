import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type UseFormReturn } from 'react-hook-form';
import type { UpdateProductFormSchema } from '../../types';
import { UpdateProductCategoryOption } from '../option/UpdateProductCategoryOption';

type UpdateProductFormInnerProps = {
    form_id: string;
    form: UseFormReturn<UpdateProductFormSchema>;
    onSubmit: (values: UpdateProductFormSchema) => void;
};

export const UpdateProductFormInner = (props: UpdateProductFormInnerProps) => {
    const { form_id, form, onSubmit } = props;

    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full"
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
                    name="price"
                    render={({ field: { onChange, value, ...field } }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <span className="absolute left-3 text-gray-500">
                                        Rp.
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="0"
                                        className="pl-12"
                                        {...field}
                                        onChange={e => {
                                            const rawValue =
                                                e.target.value.replace(
                                                    /[^\d]/g,
                                                    '',
                                                );
                                            const numberValue =
                                                Number(rawValue);
                                            onChange(numberValue);
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div>
                <UpdateProductCategoryOption form={form} />
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
            <div>
            <FormField
                    control={form.control}
                    name="stock"
                    render={({ field: { onChange, value, ...field } }) => (
                        <FormItem>
                            <FormLabel>Stock</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="0"
                                    {...field}
                                    value={value}
                                    onChange={e => {
                                        const rawValue = e.target.value.replace(
                                            /[^\d]/g,
                                            '',
                                        );
                                        const numberValue = Number(rawValue);
                                        onChange(numberValue);
                                    }}
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
                    name="weight"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Weight</FormLabel>
                            <FormControl>
                                <Input placeholder="0" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </form>
    );
};
