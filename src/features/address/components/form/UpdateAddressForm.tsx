import { useForm } from 'react-hook-form';
import {
    updateAddressFormSchema,
    type UpdateAddressFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { UpdateAddressFormInner } from './UpdateAddressFormInner';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type UpdateAddressFormProps = {
    setIsOpen: (isOpen: boolean) => void;
};

export const UpdateAddressForm = (props: UpdateAddressFormProps) => {
    const { setIsOpen } = props;
    const form = useForm<UpdateAddressFormSchema>({
        defaultValues: {
            label: '',
        },
        resolver: zodResolver(updateAddressFormSchema),
    });

    const onSubmit = (values: UpdateAddressFormSchema) => console.log(values);

    return (
        <Card className="border-none shadow-none">
            <CardContent>
                <Form {...form}>
                    <UpdateAddressFormInner
                        form_id={''}
                        form={form}
                        onSubmit={onSubmit}
                    />
                </Form>
            </CardContent>
            <CardFooter className="w-full flex justify-end p-5 gap-4">
                <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button>Update</Button>
            </CardFooter>
        </Card>
    );
};
