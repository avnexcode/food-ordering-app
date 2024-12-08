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
import { BadgeCheck } from 'lucide-react';

type RegisterFormInnerProps = {
    form_id: string;
    form: UseFormReturn<RegisterFormSchema>;
    onSubmit: (values: RegisterFormSchema) => void;
};

export const RegisterFormInner = (props: RegisterFormInnerProps) => {
    const { form_id, form, onSubmit } = props;

    const validation = {
        lowercase: /(?=.*[a-z])/.test(form.watch('password')),
        uppercase: /(?=.*[A-Z])/.test(form.watch('password')),
        number: /(?=.*\d)/.test(form.watch('password')),
        symbol: /(?=.*[@$!%*?&])/.test(form.watch('password')),
    };

    const ValidatedText = ({
        isValid,
        children,
    }: {
        isValid: boolean;
        children: React.ReactNode;
    }) => (
        <span className="flex items-center gap-2">
            {isValid ? (
                <BadgeCheck className="w-4 h-4 text-green-500" />
            ) : (
                <BadgeCheck className="w-4 h-4 text-gray-500" />
            )}
            {children}
        </span>
    );

    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-y-3"
        >
            <div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
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
                            <FormLabel>Email Address</FormLabel>
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
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            <div className="flex justify-around py-5">
                                <p className="flex flex-col gap-4">
                                    <ValidatedText
                                        isValid={validation.uppercase}
                                    >
                                        <span
                                            className={
                                                validation.uppercase
                                                    ? 'text-green-500'
                                                    : ''
                                            }
                                        >
                                            Uppercase
                                        </span>
                                    </ValidatedText>
                                    <ValidatedText
                                        isValid={validation.lowercase}
                                    >
                                        <span
                                            className={
                                                validation.lowercase
                                                    ? 'text-green-500'
                                                    : ''
                                            }
                                        >
                                            Lowercase
                                        </span>
                                    </ValidatedText>
                                </p>
                                <p className="flex flex-col gap-4">
                                    <ValidatedText isValid={validation.number}>
                                        <span
                                            className={
                                                validation.number
                                                    ? 'text-green-500'
                                                    : ''
                                            }
                                        >
                                            Number
                                        </span>
                                    </ValidatedText>
                                    <ValidatedText isValid={validation.symbol}>
                                        <span
                                            className={
                                                validation.symbol
                                                    ? 'text-green-500'
                                                    : ''
                                            }
                                        >
                                            Symbol
                                        </span>
                                    </ValidatedText>
                                </p>
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
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
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
