import { NavbarIcon } from "./NavbarIcon"
import { NavbarMenu } from "./NavbarMenu"
export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-5 py-2">
            <NavbarIcon />
            <NavbarMenu />
        </nav>
    )
}
