import { type NextAuthConfig } from "next-auth";

export const pages: NextAuthConfig["pages"] = {
    signIn: "/auth/login",
    signOut: "/auth/register",
    error: "",
} as const;