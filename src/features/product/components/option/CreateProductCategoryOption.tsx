import {
    FormControl,
    FormField,
    FormItem,
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
import { useProductCategories } from '@/features/product-category/api';

type CreateProductCategoryOptionProps = {
    form: UseFormReturn<CreateProductFormSchema>;
    className?: string;
};

export const CreateProductCategoryOption = (
    props: CreateProductCategoryOptionProps,
) => {
    const { form, className } = props;
    const { data: productCategories } = useProductCategories();
    return (
        <FormField
            control={form.control}
            name={'category_id'}
            render={({ field }) => (
                <FormItem>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className={`${className}`}>
                                <SelectValue placeholder={'Category'} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {productCategories?.map((category, index) => (
                                <SelectItem key={index} value={category.id}>
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
