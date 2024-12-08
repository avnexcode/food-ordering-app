import { type DefaultSession } from 'next-auth';
import { type UserRole } from '@prisma/client';

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
            role: UserRole;
            token: string;
            image: string;
            provider: string;
        } & DefaultSession['user'];
    }

    interface User extends DefaultSession.user {
        role: UserRole;
        token: string;
        image: string;
        provider: string;
    }

    interface JWT {
        role: UserRole;
        token: string;
        image: string;
        provider: string;
    }
}
