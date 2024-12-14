import { type UseFormReturn } from 'react-hook-form';
import { type RegisterFormSchema } from '../../types';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ValidatedPasswordList } from '../validation/ValidatedPasswordList';
import { useState } from 'react';
import { PasswordViewButton } from '../button/PasswordView';

type RegisterFormInnerProps = {
    form_id: string;
    form: UseFormReturn<RegisterFormSchema>;
    onSubmit: (values: RegisterFormSchema) => void;
};

export const RegisterFormInner = (props: RegisterFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    const [passwordView, setPasswordView] = useState<boolean>(false);

    const passwordValidation = {
        lowercase: /(?=.*[a-z])/.test(form.watch('password')),
        uppercase: /(?=.*[A-Z])/.test(form.watch('password')),
        number: /(?=.*\d)/.test(form.watch('password')),
        symbol: /(?=.*[@$!%*?&])/.test(form.watch('password')),
        minLength: form.watch('password').length >= 8,
    };

    const validationRules = [
        { label: 'Uppercase letter', isValid: passwordValidation.uppercase },
        { label: 'Lowercase letter', isValid: passwordValidation.lowercase },
        {
            label: 'Number and symbol',
            isValid: passwordValidation.number && passwordValidation.symbol,
        },
        {
            label: 'At least 8 characters',
            isValid: passwordValidation.minLength,
        },
    ];

    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-y-3 w-full"
        >
            <div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Full Name{' '}
                                <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your fullname"
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Email Address{' '}
                                <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
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
                            <FormLabel>
                                Password <span className="text-red-500">*</span>
                            </FormLabel>
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
                            <div className="grid items-center justify-center py-4">
                                <ValidatedPasswordList
                                    validationRules={validationRules}
                                    columns={2}
                                    className="grid grid-cols-2 gap-28"
                                />
                            </div>
                        </FormItem>
                    )}
                />
            </div>
            <div>
                <FormField
                    control={form.control}
                    name="confirm_password"
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormLabel>
                                Confirm Password{' '}
                                <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type={passwordView ? 'text' : 'password'}
                                    placeholder="Confirm your password"
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
