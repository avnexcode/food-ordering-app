import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { CirclePlus } from 'lucide-react';
import { CreateProductForm } from '../form/CreateProductForm';
import { useState } from 'react';

export const CreateProductDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    size={'sm'}
                    className="rounded-full bg-green-600 px-6 hover:bg-green-700"
                >
                    <CirclePlus />
                    New
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-auto">
                <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                    <DialogDescription>
                        Add a new product to your store
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <CreateProductForm
                        setIsPending={setIsPending}
                        setIsOpen={setIsOpen}
                    />
                </div>
                <DialogFooter className="gap-y-2">
                    <Button
                        size={'sm'}
                        variant={'default'}
                        onClick={() => setIsOpen(false)}
                        className="px-10"
                    >
                        Cancel
                    </Button>
                    <Button
                        size={'sm'}
                        variant={'default'}
                        form="create-product-form"
                        className="px-10"
                    >
                        {isPending ? 'Adding...' : 'Add'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
