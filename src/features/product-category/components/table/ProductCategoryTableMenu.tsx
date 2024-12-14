import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2, View } from 'lucide-react';
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
    );
};
