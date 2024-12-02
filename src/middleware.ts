import { type NextRequest, NextResponse } from 'next/server';
import { withAuth } from './middleware/withAuth';
import { withRole } from './middleware/withRole';
import { withAuthToken } from './middleware/withAuthToken';
import { UserRole } from '@prisma/client';
import type { RoleMiddlewareConfig } from './types/middleware';
import { ErrorFilter } from './server/filter/error.filter';

const middleware = async (request: NextRequest) => {
    try {
        return NextResponse.next({ request });
    } catch (error) {
        return ErrorFilter.catch(error);
    }
};

const protectedPaths = ['/dashboard', '/profile', '/settings'];

const roleConfig: RoleMiddlewareConfig[] = [
    { path: '/dashboard', roles: [UserRole.ADMIN], redirect: '/' },
    {
        path: '/settings/store',
        roles: [UserRole.SELLER],
        redirect: '/settings/create-store',
    },
];

const protectedApiPaths = [
    '/api/users',
    '/api/products',
    '/api/stores',
    '/api/users',
];

const middlewareHandler = withAuthToken(
    withRole(withAuth(middleware, protectedPaths), roleConfig),
    protectedApiPaths,
);

export default middlewareHandler;

export const config = {
    matcher: ['/:path*', '/api/:path*'],
};
