import { type UseFormReturn } from 'react-hook-form';
import { type LoginFormSchema } from '../../types';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordViewButton } from '../button/PasswordView';
import { useState } from 'react';

type LoginFormInnerProps = {
    form_id: string;
    form: UseFormReturn<LoginFormSchema>;
    onSubmit: (values: LoginFormSchema) => void;
};

export const LoginFormInner = (props: LoginFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    const [passwordView, setPasswordView] = useState<boolean>(false);

    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-y-3 w-full"
        >
            <div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Enter your email"
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
                    name="password"
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type={passwordView ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    {...field}
                                />
                            </FormControl>
                            <PasswordViewButton
                                passwordView={passwordView}
                                setPasswordView={setPasswordView}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </form>
    );
};
