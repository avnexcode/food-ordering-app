import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { getFirstWord, renderElements } from '@/utils';
import { signIn, signOut, useSession } from 'next-auth/react';
import { NavbarMenuItem } from './NavbarMenuItem';
import { LayoutDashboard, LogIn, LogOut, Settings } from 'lucide-react';

export const NavbarMenuList = () => {
    const { data: session, status: sessionStatus } = useSession();

    const dropDownMenu = {
        USER_MENU: [
            { label: 'settings', url: 'settings/profile', icon: <Settings /> },
        ],
        ADMIN_MENU: [
            { label: 'dashboard', url: 'dashboard', icon: <LayoutDashboard /> },
        ],
    };

    return (
        <>
            <DropdownMenuLabel className="w-full capitalize">
                {session?.user.name
                    ? `Hello, ${getFirstWord(session?.user.name)}`
                    : `Welcome 👉👌💦`}
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <div className="[&>*]:hover:cursor-pointer">
                {session?.user.role === 'ADMIN' &&
                    renderElements({
                        of: dropDownMenu.ADMIN_MENU,
                        render: (menu, index) => (
                            <NavbarMenuItem key={index} menu={menu} />
                        ),
                    })}
                {session?.user.role === 'USER' &&
                    renderElements({
                        of: dropDownMenu.USER_MENU,
                        render: (menu, index) => (
                            <NavbarMenuItem key={index} menu={menu} />
                        ),
                    })}

                {sessionStatus === 'unauthenticated' && (
                    <DropdownMenuItem onClick={() => signIn()}>
                        <LogIn />
                        Login
                    </DropdownMenuItem>
                )}

                {sessionStatus === 'authenticated' && (
                    <DropdownMenuItem onClick={() => signOut()}>
                        <LogOut />
                        Logout
                    </DropdownMenuItem>
                )}
            </div>
        </>
    );
};
