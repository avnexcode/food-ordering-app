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
import { type CreateAddressFormSchema } from '../../types';
import { useRegencies } from '@/features/locations/regency/api';

type CreateAddressRegencyOptionProps = {
    form: UseFormReturn<CreateAddressFormSchema>;
    className?: string;
};

export const CreateAddressRegencyOption = (
    props: CreateAddressRegencyOptionProps,
) => {
    const { form, className } = props;
    const { data: regencies } = useRegencies();

    return (
        <FormField
            control={form.control}
            name={'city_id'}
            render={({ field }) => (
                <FormItem>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className={`${className}`}>
                                <SelectValue placeholder={'Regency'} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {regencies?.map((province, index) => (
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
