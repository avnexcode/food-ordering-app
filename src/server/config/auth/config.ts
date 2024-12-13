import { type NextAuthConfig } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { providers } from './providers';
import { callbacks } from './callbacks';
import { pages } from './pages';
import { env } from '@/env';
import { db } from '@/server/database/db';
import getServerSession from 'next-auth';

export const authConfig = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 24,
    },
    secret: env.AUTH_SECRET,
    // adapter: PrismaAdapter(db),
    providers,
    callbacks,
    pages,
} satisfies NextAuthConfig;

export const getSessionAuth = () => getServerSession(authConfig);
