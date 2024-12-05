import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type UseFormReturn } from 'react-hook-form';
import { useUserById } from '../../../user/api/useUserById';
import { useSession } from 'next-auth/react';

type CreateStoreFormInnerProps = {
    form_id: string;
    form: UseFormReturn<{ name: string }>;
    onSubmit: (values: { name: string }) => void;
};

export const CreateStoreFormInner = (props: CreateStoreFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    const { data: session } = useSession();
    const { data: user } = useUserById({
        id: session?.user?.id,
        token: session?.user?.token,
    });
    return (
        <form id={form_id} onSubmit={form.handleSubmit(onSubmit)}>
            <div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-2'>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="name" {...field} />
                            </FormControl>
                            <FormMessage />
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="description" {...field} />
                            </FormControl>
                            <FormMessage />
                            <FormLabel>Store Photo</FormLabel>
                            <FormControl>
                                <Input placeholder="store photo" type="file" {...field} />
                            </FormControl>
                            <FormMessage />
                            <FormLabel>Bank Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Bank Number" {...field} />
                            </FormControl>
                            <FormMessage />
                            <FormLabel>Holder Bank Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Holder Bank Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            <FormLabel>Store Owner</FormLabel>
                            <FormControl>
                                <Input placeholder="Store ID" disabled value={session?.user.name} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </form>
    );
};
