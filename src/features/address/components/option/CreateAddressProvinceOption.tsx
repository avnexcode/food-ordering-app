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
import { useProvinces } from '@/features/locations/province/api/useProvinces';
import { type UseFormReturn } from 'react-hook-form';
import { type CreateAddressFormSchema } from '../../types';

type CreateAddressProvinceOptionProps = {
    form: UseFormReturn<CreateAddressFormSchema>;
    className?: string;
};

export const CreateAddressProvinceOption = (
    props: CreateAddressProvinceOptionProps,
) => {
    const { form, className } = props;
    const { data: provinces } = useProvinces();

    return (
        <FormField
            control={form.control}
            name={'province_id'}
            render={({ field }) => (
                <FormItem>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className={`${className}`}>
                                <SelectValue placeholder={'Province'} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {provinces?.map((province, index) => (
                                <SelectItem key={index} value={province.id}>
                                    {province.name}
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
