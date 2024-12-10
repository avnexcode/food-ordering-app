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
import { useDistricts } from '@/features/locations/district/api';

type CreateAddressDistrictOptionProps = {
    form: UseFormReturn<CreateAddressFormSchema>;
    className?: string;
};

export const CreateAddressDistrictOption = (
    props: CreateAddressDistrictOptionProps,
) => {
    const { form, className } = props;
    const { data: districts } = useDistricts();

    return (
        <FormField
            control={form.control}
            name={'district_id'}
            render={({ field }) => (
                <FormItem>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className={`${className}`}>
                                <SelectValue placeholder={'District'} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {districts?.map((province, index) => (
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
