import { type UseFormReturn } from 'react-hook-form';
import { type CreateAddressFormSchema } from '../../types';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { OptionForm } from './OptionForm';

type CreateAddressFormInnerProps = {
    form_id: string;
    form: UseFormReturn<CreateAddressFormSchema>;
    onSubmit: (values: CreateAddressFormSchema) => void;
};
export const CreateAddressFormInner = (props: CreateAddressFormInnerProps) => {
    const { form_id, form, onSubmit } = props;
    return (
        <form
            id={form_id}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8 w-full"
        >
            <div className="flex gap-2 ">
                <div className="w-2/5">
                    <FormField
                        control={form.control}
                        name="label"
                        render={({ field }) => (
                            <FormItem className="mt-2">
                                <FormLabel>
                                    Label{' '}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Label" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="w-full">
                    <FormField
                        control={form.control}
                        name="street"
                        render={({ field }) => (
                            <FormItem className="mt-2">
                                <FormLabel>
                                    Street{' '}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Street" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <FormLabel>
                    Location unknown <span className="text-red-500">*</span>
                </FormLabel>
                <div className="flex justify-between gap-2">
                    <div>
                        <OptionForm
                            form={form}
                            select={{ name: 'province_id', label: 'province' }}
                            options={[
                                { name: 'Jawa Nigga', label: 'jawa-nigga' },
                            ]}
                            className="w-full px-5"
                        />
                    </div>
                    <div>
                        <OptionForm
                            form={form}
                            select={{ name: 'city_id', label: 'regency' }}
                            options={[
                                { name: 'Jawa Nigga', label: 'jawa-nigga' },
                            ]}
                            className="w-full px-5"
                        />
                    </div>
                    <div>
                        <OptionForm
                            form={form}
                            select={{ name: 'district_id', label: 'district' }}
                            options={[
                                { name: 'Jawa Nigga', label: 'jawa-nigga' },
                            ]}
                            className="w-full px-5"
                        />
                    </div>
                    <div>
                        <OptionForm
                            form={form}
                            select={{ name: 'village_id', label: 'village' }}
                            options={[
                                { name: 'Jawa Nigga', label: 'jawa-nigga' },
                            ]}
                            className="w-full px-5"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="w-3/4">
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem className="mt-2">
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input placeholder="Country" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="1/4">
                    <FormField
                        control={form.control}
                        name="postal_code"
                        render={({ field }) => (
                            <FormItem className="mt-2">
                                <FormLabel>Postal Code</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Postal Code"
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
        </form>
    );
};
