import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavbarAvatar } from "./NavbarAvatar"
import { NavbarMenuList } from "./NavbarMenuList"


export const NavbarMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none focus:border-none focus:shadow-none active:outline-none active:border-none active:shadow-none">
                <NavbarAvatar />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 min-w-[200px]">
                <NavbarMenuList />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}