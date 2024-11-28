import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";
import type { MiddlewareFactory } from "@/types/middleware";

const VALID_API_PATTERNS = [
    // Exact endpoints
    "^/api/products$",
    "^/api/products/$",
    "^/api/users$",
    "^/api/users/$",
    "^/api/auth$",
    "^/api/auth/$",
    "^/api/auth/register$",
    "^/api/auth/register/$",

    // NextAuth endpoints
    "^/api/auth/session$",
    "^/api/auth/csrf$",
    "^/api/auth/signin$",
    "^/api/auth/signout$",
    "^/api/auth/callback/[^/]+$",
    "^/api/auth/providers$",
    "^/api/auth/error$",

    // OAuth specific endpoints
    "^/api/auth/signin/google$",
    "^/api/auth/signin/google/callback$",
    "^/api/auth/signin/github$",
    "^/api/auth/signin/github/callback$",
    "^/api/auth/signin/facebook$",
    "^/api/auth/signin/facebook/callback$",
    "^/api/auth/signin/twitter$",
    "^/api/auth/signin/twitter/callback$",
    "^/api/auth/signin/discord$",
    "^/api/auth/signin/discord/callback$",
    "^/api/auth/signin/microsoft$",
    "^/api/auth/signin/microsoft/callback$",
    "^/api/auth/signin/apple$",
    "^/api/auth/signin/apple/callback$",

    // OAuth token management
    "^/api/auth/token$",
    "^/api/auth/token/refresh$",
    "^/api/auth/token/revoke$",

    // Dynamic routes
    "^/api/products/[a-zA-Z0-9-]+$",
    "^/api/users/[a-zA-Z0-9-]+$"
] as const;

export const withNotFound: MiddlewareFactory = (middleware) => {
    return async (request: NextRequest, next: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;

        if (pathname.startsWith("/api")) {
            const isValidEndpoint = VALID_API_PATTERNS.some(pattern =>
                new RegExp(pattern).test(pathname)
            );

            if (!isValidEndpoint) {
                return NextResponse.json({
                    status: false,
                    statusCode: 404,
                    error: `API endpoint ${pathname} not found`
                }, { status: 404 });
            }
        }

        return middleware(request, next);
    };
};