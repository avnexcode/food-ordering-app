import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type UseFormReturn } from 'react-hook-form';
import { type UpdateStoreFormSchema } from '../../types';
import { Textarea } from '@/components/ui/textarea';

type UpdateStoreFormInnerProps = {
    form_id: string;
    form: UseFormReturn<UpdateStoreFormSchema>;
    onSubmit: (values: UpdateStoreFormSchema) => void;
};

export const UpdateStoreFormInner = (props: UpdateStoreFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-y-5"
        >
            <div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-2">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="name" {...field} />
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
                        <FormItem className="flex flex-col gap-2">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="description"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/3 w-full">
                    <FormField
                        control={form.control}
                        name="bank_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bank Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="bank_name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="lg:w-1/3 w-full">
                    <FormField
                        control={form.control}
                        name="bank_account"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bank Account</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="bank_account"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="lg:w-1/3 w-full">
                    <FormField
                        control={form.control}
                        name="bank_holder"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bank Holder</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Bank Holder"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </form>
    );
};
