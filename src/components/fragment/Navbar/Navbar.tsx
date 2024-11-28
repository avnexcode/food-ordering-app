import { NavbarIcon } from "./NavbarIcon";
import { NavbarMenu } from "./NavbarMenu";
export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-5 py-2">
            <NavbarIcon />
            <NavbarMenu />
        </nav>
    );
};
