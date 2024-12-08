import { NavbarIcon } from './NavbarIcon';
import { NavbarMenu } from './NavbarMenu';
import { NavbarDropdownMenu } from './NavbarDropdownMenu';
export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-20 py-2">
            <div className='flex gap-4'>
                <NavbarIcon />
                <NavbarMenu />
            </div>
            <NavbarDropdownMenu />
        </nav>
    );
};
