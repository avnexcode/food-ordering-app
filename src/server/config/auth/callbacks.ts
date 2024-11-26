import { type Role } from "@prisma/client";
import { type NextAuthConfig } from "next-auth";

export const callbacks: NextAuthConfig["callbacks"] = {
    jwt: async ({ token, account, profile, user }) => {
        if (account?.provider === 'credentials' && user) {
            token.email = user.email;
            token.name = user.name;
            token.role = user.role;
        }
        return token;
    },
    session: async ({ session, token }) => {
        if ('email' in token && 'name' in token && 'role' in token) {
            session.user.email = token.email!;
            session.user.name = token.name!;
            session.user.role = token.role as Role;
        }

        return {
            ...session,
            user: {
                ...session.user,
                id: token.sub,
            },
        };
    },
};