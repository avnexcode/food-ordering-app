import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

type ProductTableMenuProps = {
    id: string;
};

export const ProductTableMenu = (props: ProductTableMenuProps, ) => {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <Ellipsis size={20} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="[&>*]:cursor-pointer">
                <DropdownMenuItem onClick={() => router.push(`/dashboard/store/product/edit/${props.id}`,)}>
                        <Pencil />
                        Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash2 />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
