import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { type UseFormReturn } from 'react-hook-form';
import type { CreateProductFormSchema } from '../../types';
import { useStore } from '@/features/store/api/useStore';

type CreateProductCategoryOptionProps = {
    form: UseFormReturn<CreateProductFormSchema>;
    className?: string;
};

export const CreateProductCategoryOption = (
    props: CreateProductCategoryOptionProps,
) => {
    const { form, className } = props;
    const { data: store } = useStore();

    return (
        <FormField
            control={form.control}
            name={'category_id'}
            render={({ field }) => (
                <FormItem className={`${className}`}>
                    <Select
                        onValueChange={value => {
                            field.onChange(value === 'none' ? null : value);
                        }}
                        value={field.value ?? 'none'}
                    >
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                            <SelectTrigger className={`${className}`}>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="none">
                                Select category
                            </SelectItem>
                            {store?.product_categories.map(category => (
                                <SelectItem
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
