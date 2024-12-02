import { type UseFormReturn } from 'react-hook-form';
import { type UpdatePasswordSchema } from '../types';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type UpdatePasswordFormInnerProps = {
    form_id: string;
    form: UseFormReturn<UpdatePasswordSchema>;
    onSubmit: (values: UpdatePasswordSchema) => void;
};
export const UpdatePasswordFormInner = (
    props: UpdatePasswordFormInnerProps,
) => {
    const { form_id, form, onSubmit } = props;
    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
        >
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input
                                type="password"
                                placeholder="Password"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                            <Input
                                type="password"
                                placeholder="New Password"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>New Password Confirm</FormLabel>
                        <FormControl>
                            <Input
                                type="password"
                                placeholder="New Password Confirm"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </form>
    );
};
