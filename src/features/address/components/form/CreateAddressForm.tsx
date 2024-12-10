import { useForm } from 'react-hook-form';
import {
    createAddressFormSchema,
    type CreateAddressFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { CreateAddressFormInner } from './CreateAddressFormInner';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAddresses, useCreateAddress } from '../../api';
import { useToast } from '@/hooks/use-toast';

type CreateAddressFormProps = {
    setIsOpen: (isOpen: boolean) => void;
};

export const CreateAddressForm = (props: CreateAddressFormProps) => {
    const { setIsOpen } = props;
    const { toast } = useToast();

    const form = useForm<CreateAddressFormSchema>({
        defaultValues: {
            label: '',
            street: '',
            province_id: '',
            city_id: '',
            district_id: '',
            village_id: '',
            country: '',
            postal_code: '',
            description: '',
        },
        resolver: zodResolver(createAddressFormSchema),
    });

    const onSubmit = (values: CreateAddressFormSchema) => createAddress(values);

    const { refetch: refetchAddress } = useAddresses();

    const { mutate: createAddress, isPending: createAddressIsPending } =
        useCreateAddress({
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Success add new address',
                });
                await refetchAddress();
                setIsOpen(false);
            },
        });

    return (
        <Card className="border-none shadow-none">
            <CardContent>
                <Form {...form}>
                    <CreateAddressFormInner
                        form_id="create-address-form"
                        form={form}
                        onSubmit={onSubmit}
                    />
                </Form>
            </CardContent>
            <CardFooter className="w-full flex justify-end p-5 gap-4">
                <Button size={'sm'} onClick={() => setIsOpen(false)}>
                    Cancel
                </Button>
                <Button
                    size={'sm'}
                    form="create-address-form"
                    disabled={createAddressIsPending}
                >
                    {createAddressIsPending ? 'Adding...' : 'Add'}
                </Button>
            </CardFooter>
        </Card>
    );
};
