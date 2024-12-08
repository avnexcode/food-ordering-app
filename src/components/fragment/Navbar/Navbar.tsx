import { NavbarIcon } from './NavbarIcon';
import { NavbarMenu } from './NavbarMenu';
import { NavbarDropdownMenu } from './NavbarDropdownMenu';
import { NavbarCartButton } from './NavbarCartButton';
export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-20 py-2">
            <div className='flex gap-4'>
                <NavbarIcon />
                <NavbarMenu />
            </div>
            <div className='flex gap-4'>
                <NavbarCartButton />
                <NavbarDropdownMenu />
            </div>
        </nav>
    );
};
