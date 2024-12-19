import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2, View } from 'lucide-react';
import Link from 'next/link';

type ProductTableMenuProps = {
    id: string;
};

export const ProductTableMenu = (props: ProductTableMenuProps) => {
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
                    <Link href={`/dashboard/store/product/${props.id}`}>
                        <Pencil />
                        Edit
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash2 />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
