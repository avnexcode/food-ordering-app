import { type NextRequest, NextResponse } from 'next/server';
import { withAuth } from './middleware/withAuth';
import { withRole } from './middleware/withRole';
import { UserRole } from '@prisma/client';
import type { RoleMiddlewareConfig } from './types/middleware';

const middleware = async (request: NextRequest) => {
    return NextResponse.next();
};

const protectedPaths = ['/dashboard', '/profile'];

const roleConfig: RoleMiddlewareConfig[] = [
    { path: '/dashboard', roles: [UserRole.ADMIN] },
    { path: '/profile', roles: [UserRole.ADMIN, UserRole.USER] },
    { path: '/profile/store', roles: [UserRole.SELLER] },
];

const middlewareHandler = withRole(
    withAuth(middleware, protectedPaths),
    roleConfig,
);

export default middlewareHandler;

export const config = {
    matcher: ['/:path*'],
};
