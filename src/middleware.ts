import { type NextRequest, NextResponse } from 'next/server';
import { withAuth } from './middleware/withAuth';
import { withRole } from './middleware/withRole';
import { withAuthToken } from './middleware/withAuthToken';
import { UserRole } from '@prisma/client';
import type { RoleMiddlewareConfig } from './types/middleware';

const middleware = async (request: NextRequest) => {
    if (request.nextUrl.pathname === '/dashboard/store') {
        return NextResponse.redirect(
            new URL('/dashboard/store/product', request.url),
        );
    }
    return NextResponse.next({ request });
};

const protectedPaths = ['/dashboard', '/account', '/cart', '/checkout'];

const roleConfig: RoleMiddlewareConfig[] = [
    { path: '/dashboard/admin', roles: [UserRole.ADMIN], redirect: '/' },
    {
        path: '/dashboard/store',
        roles: [UserRole.SELLER],
        redirect: '/account/create-store',
    },
    {
        path: '/account/create-store',
        roles: [UserRole.USER],
        redirect: '/account/store',
    },
];

const protectedApiPaths = [
    '/api/v1/users',
    '/api/v1/addresses',
    '/api/v1/stores',
    '/api/v1/product-categories',
    '/api/v1/products',
    '/api/v1/pmay',
];

const middlewareHandler = withAuthToken(
    withRole(withAuth(middleware, protectedPaths), roleConfig),
    protectedApiPaths,
);

export default middlewareHandler;

export const config = {
    matcher: ['/:path*', '/api/:path*'],
};
