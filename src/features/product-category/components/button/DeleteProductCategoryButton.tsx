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
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useDeleteProductCategory } from '@/features/product-category/api/useDeleteProductCategory';
import { useStore } from '@/features/store/api/useStore';
import { useToast } from '@/hooks/use-toast';
import { Trash2 } from 'lucide-react';

type DeleteProductCategoryButtonProps = {
    id: string;
};

export const DeleteProductCategoryButton = (
    props: DeleteProductCategoryButtonProps,
) => {
    const { toast } = useToast();
    const { refetch: refetchStore } = useStore();
    const { mutate: deleteProductCategory } = useDeleteProductCategory({
        id: props.id,
        onSuccess: async () => {
            await refetchStore();
            toast({
                title: 'Success',
                description: 'Success delete product category',
            });
        },
        onError: async error => {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: error.response?.data.error ?? error.message,
            });
        },
    });
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={e => e.preventDefault()}>
                    <Trash2 />
                    Delete
                </DropdownMenuItem>
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

// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from '@/components/ui/alert-dialog';
// import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
// import { useDeleteProductCategory } from '@/features/product-category/api/useDeleteProductCategory';
// import { Trash2 } from 'lucide-react';
// import { forwardRef } from 'react';

// type DeleteProductCategoryButtonProps = {
//     id: string;
// };

// export const DeleteProductCategoryButton = forwardRef<
//     HTMLDivElement,
//     DeleteProductCategoryButtonProps
// >((props, ref) => {
//     const { mutate: deleteProductCategory } = useDeleteProductCategory({
//         id: props.id,
//         onSuccess: async () => {
//             console.log('Delete successful');
//         },
//         onError: async (error) => {
//             console.log('Delete failed:', error);
//         },
//     });

//     return (
//         <AlertDialog>
//             <AlertDialogTrigger asChild>
//                 <DropdownMenuItem
//                     ref={ref}
//                     className="text-red-600"
//                     onSelect={(e) => e.preventDefault()}
//                 >
//                     <Trash2 className="mr-2 h-4 w-4" />
//                     Delete
//                 </DropdownMenuItem>
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//                 <AlertDialogHeader>
//                     <AlertDialogTitle>
//                         Delete Product Category
//                     </AlertDialogTitle>
//                     <AlertDialogDescription>
//                         Are you sure you want to delete this product category?
//                         This action cannot be undone.
//                     </AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <AlertDialogFooter>
//                     <AlertDialogCancel>Cancel</AlertDialogCancel>
//                     <AlertDialogAction
//                         onClick={() => deleteProductCategory()}
//                         className="bg-red-600 hover:bg-red-700"
//                     >
//                         Delete
//                     </AlertDialogAction>
//                 </AlertDialogFooter>
//             </AlertDialogContent>
//         </AlertDialog>
//     );
// });

// DeleteProductCategoryButton.displayName = 'DeleteProductCategoryButton';
