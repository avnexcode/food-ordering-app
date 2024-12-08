import { type NextRequest, NextResponse } from 'next/server';
import { withAuth } from './middleware/withAuth';
import { withRole } from './middleware/withRole';
import { withAuthToken } from './middleware/withAuthToken';
import { UserRole } from '@prisma/client';
import type { RoleMiddlewareConfig } from './types/middleware';

const middleware = async (request: NextRequest) =>
    NextResponse.next({ request });

const protectedPaths = ['/dashboard', '/settings', '/cart', '/checkout'];

const roleConfig: RoleMiddlewareConfig[] = [
    { path: '/dashboard', roles: [UserRole.ADMIN], redirect: '/' },
    {
        path: '/settings/store',
        roles: [UserRole.SELLER],
        redirect: '/settings/create-store',
    },
    {
        path: '/settings/create-store',
        roles: [UserRole.USER],
        redirect: '/settings/store',
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
