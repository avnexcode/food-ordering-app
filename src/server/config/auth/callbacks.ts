import { loginWithGoogle } from "@/server/features/auth";
import { type UpdateUserRequest } from "@/server/features/user/user.model";
import { type UserRole } from "@prisma/client";
import { type NextAuthConfig } from "next-auth";

export const callbacks: NextAuthConfig["callbacks"] = {
    jwt: async ({ token, account, profile, user }) => {
        if (account?.provider === 'credentials' && user) {
            token.email = user.email;
            token.name = user.name;
            token.role = user.role;
        }

        if (account?.provider === 'google') {
            const payload = {
                name: user?.name,
                email: user?.email,
                provider: 'google'
            }

            const response = await loginWithGoogle(payload as UpdateUserRequest)
            if (response) {
                token.email = response.email
                token.name = response.name
                token.role = response.role
                token.provider = response.provider
            }
        }

        return token;
    },
    session: async ({ session, token }) => {
        if ('email' in token && 'name' in token && 'role' in token) {
            session.user.email = token.email!;
            session.user.name = token.name!;
            session.user.role = token.role as UserRole;
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