import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NavbarAvatar } from './NavbarAvatar';
import { NavbarDropdownMenuList } from './NavbarDropdownMenuList';
import { type User } from 'next-auth';

type NavbarDropdownMenuProps = {
    user: User;
};

export const NavbarDropdownMenu = (props: NavbarDropdownMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:border-none focus:shadow-none focus:outline-none active:border-none active:shadow-none active:outline-none">
                <NavbarAvatar user={props.user} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-24 min-w-[210px]">
                <NavbarDropdownMenuList user={props.user} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
