import { env } from "@/env";

export const NavbarIcon = () => {
    return <h1 className="">{env.NEXT_PUBLIC_APP_NAME}</h1>;
};
