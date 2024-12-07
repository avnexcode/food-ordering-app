import { useForm } from 'react-hook-form';
import {
    createAddressFormSchema,
    type CreateAddressFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { CreateAddressFormInner } from './CreateAddressFormInner';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const CreateAddressForm = () => {
    const form = useForm<CreateAddressFormSchema>({
        defaultValues: {
            label: '',
        },
        resolver: zodResolver(createAddressFormSchema),
    });

    const onSubmit = (values: CreateAddressFormSchema) => console.log(values);

    return (
        <Card className="border-none">
            <CardHeader className="gap-y-5">
                <CardTitle>Create Address</CardTitle>
                <CardDescription>
                    Create your address, we will use this address to send order
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <CreateAddressFormInner
                        form_id=""
                        form={form}
                        onSubmit={onSubmit}
                    />
                </Form>
            </CardContent>
            <CardFooter className='place-content-end pt-5'>
                <Button>Submit</Button>
            </CardFooter>
        </Card>
    );
};
