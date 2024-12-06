import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type UseFormReturn } from 'react-hook-form';
import { useUserById } from '../../../../user/api/useUserById';
import { useSession } from 'next-auth/react';

type CreateStoreFormInnerProps = {
    form_id: string;
    form: UseFormReturn<{ name: string }>;
    onSubmit: (values: { name: string }) => void;
};

export const CreateStoreFormInner = (props: CreateStoreFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        return <div>No session found. Please log in.</div>;
    }

    return (
        <form id={form_id} onSubmit={form.handleSubmit(onSubmit)}>
            <div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="mt-2">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
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
                        <FormItem className="mt-2">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div>
                <FormField
                    control={form.control}
                    name="storePhoto"
                    render={({ field }) => (
                        <FormItem className="mt-2">
                            <FormLabel>Store Photo</FormLabel>
                            <FormControl>
                                <Input placeholder="Store Photo" type="file" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div>
                <FormField
                    control={form.control}
                    name="bankNumber"
                    render={({ field }) => (
                        <FormItem className="mt-2">
                            <FormLabel>Bank Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Bank Number" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div>
                <FormField
                    control={form.control}
                    name="holderBankName"
                    render={({ field }) => (
                        <FormItem className="mt-2">
                            <FormLabel>Holder Bank Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Holder Bank Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </form>
    );
};