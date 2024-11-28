import { env } from "@/env";
import { type MiddlewareFactory } from "@/types/middleware";
import { getToken } from "next-auth/jwt";
import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";

const PATHS = {
    DEFAULT_REDIRECT: '/',
    ADMIN: ['/dashboard'],
    PUBLIC_ONLY: ['/auth/login', '/auth/register'],
    LOGIN: '/auth/login'
} as const;

export const withAuth: MiddlewareFactory = (middleware, requireAuth = []) => {
    return async (request: NextRequest, next: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;
        const token = await getToken({
            req: request,
            secret: env.AUTH_SECRET
        });

        if (PATHS.PUBLIC_ONLY.some(path => pathname.startsWith(path))) {
            if (token) {
                const url = new URL(PATHS.DEFAULT_REDIRECT, request.url);
                return NextResponse.redirect(url);
            }
        }

        if (requireAuth.some(path => pathname.startsWith(path))) {
            if (!token) {
                const url = new URL(PATHS.LOGIN, request.url);
                url.searchParams.set("callbackUrl", encodeURI(request.url));
                return NextResponse.redirect(url);
            }

            if (PATHS.ADMIN.some(path => pathname.startsWith(path)) && token.role !== 'ADMIN') {
                const url = new URL(PATHS.DEFAULT_REDIRECT, request.url);
                return NextResponse.redirect(url);
            }
        }

        return middleware(request, next);
    };
};