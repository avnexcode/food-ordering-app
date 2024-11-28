import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getFirstWord } from "@/utils";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const NavbarMenuList = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const AUTH_PATH = [
        {
            label: "profile",
            url: "profile",
        },
        {
            label: "store",
            url: "store",
        },
        {
            label: "dashboard",
            url: "dashboard",
        },
    ];

    const SELLER_PATH = []

    return (
        <>
            <DropdownMenuLabel className="w-full capitalize">
                Hello{" "}
                {session?.user.name ? ", " + getFirstWord(session?.user.name) : "World"}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="[&>*]:hover:cursor-pointer">
                {session ? (
                    <>
                        {AUTH_PATH.map((path, i) => (
                            <DropdownMenuItem
                                key={i}
                                onClick={() => router.push(path.url)}
                                className="capitalize"
                            >
                                {path.label}
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuItem onClick={() => signOut()}>
                            Logout
                        </DropdownMenuItem>
                    </>
                ) : (
                    <>
                        <DropdownMenuItem onClick={() => signIn()}>
                            Login
                        </DropdownMenuItem>
                    </>
                )}
            </div>
        </>
    );
};
