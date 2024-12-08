import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { renderElements } from '@/utils';
import { signOut } from 'next-auth/react';
import { LayoutDashboard, LogOut, Store, User as UserIcon } from 'lucide-react';
import { NavbarDropdownMenuItem } from './NavbarDropdownMenuItem';
import { type User } from 'next-auth';

type NavbarDropdownMenuListProps = {
    user: User;
};

export const NavbarDropdownMenuList = (props: NavbarDropdownMenuListProps) => {
    const dropDownMenu = {
        ADMIN_MENU: [
            { label: 'dashboard', url: 'dashboard', icon: <LayoutDashboard /> },
        ],
    };

    return (
        <>
            <DropdownMenuLabel className="w-full">
                <div className="flex flex-col">
                    <span className="capitalize">{props.user.name}</span>
                    <span className="text-sm text-gray-400 font-poppins">
                        {props.user.email}
                    </span>
                </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <div className="[&>*]:hover:cursor-pointer">
                {props.user.role === 'ADMIN' &&
                    renderElements({
                        of: dropDownMenu.ADMIN_MENU,
                        render: (menu, index) => (
                            <NavbarDropdownMenuItem key={index} menu={menu} />
                        ),
                    })}

                <NavbarDropdownMenuItem
                    menu={{
                        label: 'account',
                        url: '/account/profile',
                        icon: <UserIcon />,
                    }}
                />
                <NavbarDropdownMenuItem
                    menu={{
                        label: 'dashboard store',
                        url: '/account/store',
                        icon: <Store />,
                    }}
                />

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut />
                    Sign Out
                </DropdownMenuItem>
            </div>
        </>
    );
};
