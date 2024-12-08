import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { getFirstWord, renderElements } from '@/utils';
import { signIn, signOut, useSession } from 'next-auth/react';
// import { NavbarMenuItem } from './NavbarDropdownMenuItem';
import { LayoutDashboard, LogIn, LogOut, Settings, Store } from 'lucide-react';
import { NavbarDropdownMenuItem } from './NavbarDropdownMenuItem';

export const NavbarDropdownMenuList = () => {
    const { data: session, status: sessionStatus } = useSession();
    console.log()

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
            <DropdownMenuLabel className="w-full ">
                <div className='flex flex-col'>
                    <span className='capitalize'>
                        {session?.user.name}
                    </span>
                    <span className='text-sm text-gray-400 font-poppins'>
                        {session?.user.email}
                    </span>
                </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <div className="[&>*]:hover:cursor-pointer">
                {session?.user.role === 'ADMIN' &&
                    renderElements({
                        of: dropDownMenu.ADMIN_MENU,
                        render: (menu, index) => (
                            <NavbarDropdownMenuItem key={index} menu={menu} />
                        ),
                    })}
                {session?.user.role === 'USER' &&
                    renderElements({
                        of: dropDownMenu.USER_MENU,
                        render: (menu, index) => (
                            <NavbarDropdownMenuItem key={index} menu={menu} />
                        ),
                    })}

                <NavbarDropdownMenuItem
                    menu={{
                        label: 'store',
                        url: '/store',
                        icon: <Store />,
                    }}
                />

                {sessionStatus === 'unauthenticated' && (
                    <>
                        <DropdownMenuItem onClick={() => signIn()}>
                            <LogIn />
                            Login
                        </DropdownMenuItem>
                    </>
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
