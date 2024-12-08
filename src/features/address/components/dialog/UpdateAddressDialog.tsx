import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { UpdateAddressForm } from '../form/UpdateAddressForm';
import { useState } from 'react';

export const UpdateAddressDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>();
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild className="w-1/4">
                <Button variant="outline">Update Address</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Address</DialogTitle>
                    <DialogDescription>
                        Edit the address details, then click submit to update
                        the address.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <UpdateAddressForm setIsOpen={setIsOpen}/>
                </div>
            </DialogContent>
        </Dialog>
    );
};
