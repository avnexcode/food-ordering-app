import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DeleteProductCategoryButton } from '@/features/product-category/components/button/DeleteProductCategoryButton';
import { Ellipsis, Pencil, Trash2, View } from 'lucide-react';
<<<<<<< HEAD
import { UpdateProductCategoryDialog } from '../dialog/UpdateProductCategoryDialog';

export const ProductCategoryTableMenu = () => {
    return (
        <>
            <UpdateProductCategoryDialog />
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full">
                    <Ellipsis size={20} strokeWidth={2} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="[&>*]:cursor-pointer">
                    <DropdownMenuItem>
                        <View />
                        Detail
                    </DropdownMenuItem>
                    <DropdownMenuItem>{/* <Pencil /> */}</DropdownMenuItem>
                    <DropdownMenuItem>
                        <Trash2 />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
=======
import { as } from './../../../../../.next/static/chunks/51898_axios_7a7c63._';

export const ProductCategoryTableMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <Ellipsis size={20} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="[&>*]:cursor-pointer">
                <DropdownMenuItem>
                    <View />
                    Detail
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Pencil />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <DeleteProductCategoryButton id="asd" />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
>>>>>>> 59c4c8f25abfd07578e9eb4c5b99484046cddd10
    );
};
