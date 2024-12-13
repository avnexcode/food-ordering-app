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
import { useVillages } from '@/features/locations/village/api';

type CreateAddressVillageOptionProps = {
    form: UseFormReturn<CreateAddressFormSchema>;
    className?: string;
};

export const CreateAddressVillageOption = (
    props: CreateAddressVillageOptionProps,
) => {
    const { form, className } = props;
    const { data: villages } = useVillages();

    return (
        <FormField
            control={form.control}
            name={'village_id'}
            render={({ field }) => (
                <FormItem>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className={`${className}`}>
                                <SelectValue placeholder={'Village'} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {villages?.map((province, index) => (
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
