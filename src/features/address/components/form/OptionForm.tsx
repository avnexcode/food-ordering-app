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
import {
    type Path,
    type FieldValues,
    type UseFormReturn,
} from 'react-hook-form';

type BaseOptionField<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    placeholder?: string;
    className?: string;
};

type OptionFormProps<T extends FieldValues> = {
    select: BaseOptionField<T>;
    options: { label: string; name: string }[];
    form: UseFormReturn<T>;
    className?: string;
};

export const OptionForm = <T extends FieldValues>(
    props: OptionFormProps<T>,
) => {
    const { form, className } = props;
    console.log('hello form options' + props.select.label);

    return (
        <FormField
            control={form.control}
            name={props.select.name}
            render={({ field }) => (
                <FormItem>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className={`${className}`}>
                                <SelectValue placeholder={props.select.label} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="jawa-nigga">
                                Jawa Nigga
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
