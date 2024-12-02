import { Input } from '@/components/ui/input';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    type FieldValues,
    type Path,
    type UseFormReturn,
} from 'react-hook-form';
import { separateWords } from '@/utils/separate-word';

type BaseInputField<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    className?: string;
};

type InputFieldProps<T extends FieldValues> = {
    input: BaseInputField<T>;
    form: UseFormReturn<T>;
};

export const InputField = <T extends FieldValues>({
    form,
    input,
}: InputFieldProps<T>) => {
    return (
        <FormField
            key={input.name as string}
            control={form.control}
            name={input.name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="capitalize">
                        {input.label ?? String(separateWords(input.name))}
                    </FormLabel>
                    <FormControl>
                        <Input
                            placeholder={
                                input.placeholder ??
                                `Enter ${String(separateWords(input.name))} here`
                            }
                            type={input.type}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
