import { authService } from '@/server/features/auth';
import { type UpdateUserRequest } from '@/server/features/user/user.model';
import { type UserRole } from '@prisma/client';
import { type NextAuthConfig } from 'next-auth';

export const callbacks: NextAuthConfig['callbacks'] = {
    jwt: async ({ token, account, profile, user }) => {
        if (account?.provider === 'credentials') {
            token.email = user.email;
            token.name = user.name;
            token.role = user.role;
            token.image = user.image;
            token.token = user.token;
            token.provider = user.provider;
            token.sub = user.id;
        }

        if (account?.provider === 'google') {
            const payload = {
                name: user?.name,
                email: user?.email,
                provider: 'google',
                image: user?.image,
            };

            const response = await authService.loginWithGoogle(
                payload as UpdateUserRequest,
            );

            if (response) {
                token.email = response.email;
                token.name = response.name;
                token.role = response.role;
                token.image = response.image;
                token.token = response.token;
                token.provider = response.provider;
                token.sub = response.id;
            }
        }

        return token;
    },
    session: async ({ session, token }) => {
        if (
            'email' in token &&
            'name' in token &&
            'role' in token &&
            'token' in token
        ) {
            session.user.email = token.email!;
            session.user.name = token.name;
            session.user.role = token.role as UserRole;
            session.user.token = token.token as string;
            session.user.provider = token.provider as string;
            session.user.id = token.sub!;

            if ('image' in token && token.image) {
                session.user.image = token.image as string;
            }
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
