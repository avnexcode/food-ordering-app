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
import { useState } from 'react';
import { CreateProductCategoryForm } from '../form/CreateProductCategoryForm';

export const CreateProductCategoryDialog = () => {
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
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Product Category</DialogTitle>
                    <DialogDescription>
                        Add a new product category to your store
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <CreateProductCategoryForm setIsPending={setIsPending} setIsOpen={setIsOpen} />
                </div>
                <DialogFooter>
                    <Button
                        size={'sm'}
                        variant={'default'}
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        size={'sm'}
                        variant={'default'}
                        form="create-product-category-form"
                        disabled={isPending}
                    >
                        {isPending ? 'Adding...' : 'Add'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
