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
import { Button } from '@/components/ui/button';
import { useDeleteProductCategory } from '@/features/product-category/api/useDeleteProductCategory';
import { Trash2 } from 'lucide-react';

type DeleteProductCategoryButtonProps = {
    id: string;
};

export const DeleteProductCategoryButton = (
    props: DeleteProductCategoryButtonProps,
) => {
    const { mutate: deleteProductCategory } = useDeleteProductCategory({
        id: props.id,
        onSuccess: async () => {
            console.log('crot crot');
        },
        onError: async error => {
            console.log('crot');
        },
    });
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={'ghost'}>
                    <Trash2 />
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
                        delete your account and remove your data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteProductCategory()}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
