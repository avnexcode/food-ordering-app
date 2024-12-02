import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { UseFormReturn } from 'react-hook-form';
import type { UpdateProfileSchema } from '../types';

type UpdateProfileFormInnerProps = {
    form: UseFormReturn<UpdateProfileSchema>;
    onSubmit: (values: UpdateProfileSchema) => void;
};

export const UpdateProfileFormInner = (props: UpdateProfileFormInnerProps) => {
    const { form, onSubmit } = props;
    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-y-5"
        >
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="Username" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input
                                type="email"
                                placeholder="Email"
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
