import { type UseFormReturn } from 'react-hook-form';
import { type UpdatePasswordSchema } from '../../../profile/types';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ValidatedPasswordList } from '@/features/auth/validation/ValidatedPasswordList';
import { PasswordViewButton } from '@/features/auth/components/button/PasswordView';
import { useState } from 'react';

type UpdatePasswordFormInnerProps = {
    form_id: string;
    form: UseFormReturn<UpdatePasswordSchema>;
    onSubmit: (values: UpdatePasswordSchema) => void;
};
export const UpdatePasswordFormInner = (
    props: UpdatePasswordFormInnerProps,
) => {
    const { form_id, form, onSubmit } = props;
    const [passwordView, setPasswordView] = useState<boolean>(false);
    const [newPasswordView, setNewPasswordView] = useState<boolean>(false);

    const passwordValidation = {
        lowercase: /(?=.*[a-z])/.test(form.watch('new_password')),
        uppercase: /(?=.*[A-Z])/.test(form.watch('new_password')),
        number: /(?=.*\d)/.test(form.watch('new_password')),
        symbol: /(?=.*[@$!%*?&])/.test(form.watch('new_password')),
        minLength: form.watch('new_password').length >= 8,
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
            className="flex flex-col gap-4 w-full"
        >
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem className="relative">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input
                                type={passwordView ? 'text' : 'password'}
                                placeholder="Password"
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
            <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                    <FormItem className="relative">
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                            <Input
                                type={newPasswordView ? 'text' : 'password'}
                                placeholder="New Password"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        <PasswordViewButton
                            passwordView={newPasswordView}
                            setPasswordView={setNewPasswordView}
                        />
                        <div className="grid items-center justify-center py-5">
                            <ValidatedPasswordList
                                validationRules={validationRules}
                                columns={4}
                                className="flex gap-14"
                            />
                        </div>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                    <FormItem className="relative">
                        <FormLabel>New Password Confirm</FormLabel>
                        <FormControl>
                            <Input
                                type={newPasswordView ? 'text' : 'password'}
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
