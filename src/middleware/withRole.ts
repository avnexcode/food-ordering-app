import { env } from '@/env';
import type {
    RoleMiddlewareConfig,
    MiddlewareFactory,
} from '@/types/middleware';
import { type UserRole } from '@prisma/client';
import { getToken } from 'next-auth/jwt';
import {
    type NextFetchEvent,
    type NextRequest,
    NextResponse,
} from 'next/server';

const PATHS = {
    DEFAULT_REDIRECT: '/',
} as const;

export const withRole: MiddlewareFactory<RoleMiddlewareConfig[]> = (
    middleware,
    roleConfig = [],
) => {
    return async (request: NextRequest, next: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;
        const token = await getToken({
            req: request,
            secret: env.AUTH_SECRET,
        });

        if (!token || !roleConfig.length) {
            return middleware(request, next);
        }

        const matchedConfig = roleConfig.find(config =>
            pathname.startsWith(config.path),
        );
        if (
            matchedConfig &&
            !matchedConfig.roles.includes(token.role as UserRole)
        ) {
            const url = new URL(PATHS.DEFAULT_REDIRECT, request.url);
            return NextResponse.redirect(url);
        }

        return middleware(request, next);
    };
};
