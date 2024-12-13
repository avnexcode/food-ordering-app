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

import { CreateAddressProvinceOption } from '../option/CreateAddressProvinceOption';
import { CreateAddressRegencyOption } from '../option/CreateAddressRegencyOption';
import { CreateAddressDistrictOption } from '../option/CreateAddressDistrictOption';
import { CreateAddressVillageOption } from '../option/CreateAddressVillageOption';

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
                <div className="flex flex-col gap-2">
                    <div>
                        <CreateAddressProvinceOption form={form} />
                    </div>
                    <div>
                        <CreateAddressRegencyOption form={form} />
                    </div>
                    <div>
                        <CreateAddressDistrictOption form={form} />
                    </div>
                    <div>
                        <CreateAddressVillageOption form={form} />
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
