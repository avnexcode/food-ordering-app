import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type UseFormReturn } from 'react-hook-form';
import type { CreateStoreFormSchema } from '../../types';
import { Textarea } from '@/components/ui/textarea';

type CreateStoreFormInnerProps = {
    form_id: string;
    form: UseFormReturn<CreateStoreFormSchema>;
    onSubmit: (values: CreateStoreFormSchema) => void;
};

export const CreateStoreFormInner = (props: CreateStoreFormInnerProps) => {
    const { form_id, form, onSubmit } = props;

    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
        >
            <div className="flex w-full gap-2">
                <div className="w-1/2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="mt-2">
                                <FormLabel>
                                    Name <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="w-1/2">
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem className="mt-2">
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Image"
                                        type="file"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            <div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="mt-2">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Description"
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
                    name="bank_name"
                    render={({ field }) => (
                        <FormItem className="mt-2">
                            <FormLabel>Bank Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Bank Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div>
                <FormField
                    control={form.control}
                    name="bank_account"
                    render={({ field }) => (
                        <FormItem className="mt-2">
                            <FormLabel>Bank Account</FormLabel>
                            <FormControl>
                                <Input placeholder="Bank Account" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div>
                <FormField
                    control={form.control}
                    name="bank_holder"
                    render={({ field }) => (
                        <FormItem className="mt-2">
                            <FormLabel>Bank Holder Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Bank Holder Name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </form>
    );
};
