import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getFirstWord, renderElements } from "@/utils";
import { signIn, signOut, useSession } from "next-auth/react";
import { NavbarMenuItem } from "./NavbarMenuItem";
import { CircleUserRound, LayoutDashboard, LogIn, LogOut, ShoppingCart, Store } from "lucide-react";

export const NavbarMenuList = () => {
    const { data: session, status: sessionStatus } = useSession();

    const dropDownMenu = {
        USER_MENU: [
            { label: "profile", url: "profile", icon: <CircleUserRound /> },
            { label: "store", url: "profile/store", icon: <Store /> },
            { label: "cart", url: "cart", icon: <ShoppingCart /> },
        ],
        SELLER_MENU: [
            { label: "store", url: "profile/store", icon: <Store /> },
        ],
        ADMIN_MENU: [
            { label: "dashboard", url: "dashboard", icon: <LayoutDashboard /> },
        ]
    }

    return (
        <>
            <DropdownMenuLabel className="w-full capitalize">
                {session?.user.name ? `Hello, ${getFirstWord(session?.user.name)}` : `Welcome 👉👌💦`}
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <div className="[&>*]:hover:cursor-pointer">
                {session?.user.role === "ADMIN" && renderElements({ of: dropDownMenu.ADMIN_MENU, render: (menu, index) => <NavbarMenuItem key={index} menu={menu} /> })}
                {session?.user.role === "SELLER" && renderElements({ of: dropDownMenu.SELLER_MENU, render: (menu, index) => <NavbarMenuItem key={index} menu={menu} /> })}
                {session?.user.role === "USER" && renderElements({ of: dropDownMenu.USER_MENU, render: (menu, index) => <NavbarMenuItem key={index} menu={menu} /> })}

                {sessionStatus === "unauthenticated" && (
                    <DropdownMenuItem onClick={() => signIn()}>
                        <LogIn />Login
                    </DropdownMenuItem>
                )}

                {sessionStatus === "authenticated" && (
                    <DropdownMenuItem onClick={() => signOut()}>
                        <LogOut />Logout
                    </DropdownMenuItem>
                )}
            </div>
        </>
    );
};
