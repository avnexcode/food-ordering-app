import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleX, EllipsisVertical, View } from 'lucide-react';

export const OrderCardMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="[&>*]:cursor-pointer">
                <DropdownMenuItem>
                    <View />
                    Detail
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CircleX />
                    Cancel
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
