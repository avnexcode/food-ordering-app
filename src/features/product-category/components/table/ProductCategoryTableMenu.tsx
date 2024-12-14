import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DeleteProductCategoryButton } from '@/features/product-category/components/button/DeleteProductCategoryButton';
import { Ellipsis, View } from 'lucide-react';
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
                    <DropdownMenuItem asChild>
                        <DeleteProductCategoryButton id="asd" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
