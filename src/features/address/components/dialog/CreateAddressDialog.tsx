import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { CreateAddressForm } from '../form/CreateAddressForm';
import { useState } from 'react';

export const CreateAddressDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>();
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild className="w-1/4">
                <Button variant="outline">Create Address</Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Create Address</DialogTitle>
                    <DialogDescription>
                        Create your address, we will use this address to send
                        order
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <CreateAddressForm setIsOpen={setIsOpen} />
                </div>
            </DialogContent>
        </Dialog>
    );
};
