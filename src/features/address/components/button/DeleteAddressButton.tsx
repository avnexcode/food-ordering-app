import { Button } from '@/components/ui/button';
import { useAddresses, useDeleteAddress } from '../../api';
import { useToast } from '@/hooks/use-toast';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';

type DeleteAddressButttonProps = {
    id: string;
};

export const DeleteAddressButton = (props: DeleteAddressButttonProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { toast } = useToast();

    const { refetch: refetchAddress } = useAddresses();

    const { mutate: deleteAddress, isPending: isDeleteAddressPending } =
        useDeleteAddress({
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Success delete address',
                });
                await refetchAddress();
                setIsOpen(false);
            },
            onError: async error => {
                console.log(error);
            },
        });

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
                <Button size={'sm'} variant="destructive">
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your address.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => deleteAddress(props.id)}
                        disabled={isDeleteAddressPending}
                        className="bg-red-500"
                    >
                        {isDeleteAddressPending ? 'Deleting...' : 'Delete'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
