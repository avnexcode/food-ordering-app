// types/middleware.ts
import { type UserRole } from '@prisma/client';
import { type NextFetchEvent, type NextRequest } from 'next/server';

export type MiddlewareFactory<T> = (
    middleware: (
        request: NextRequest,
        next: NextFetchEvent,
    ) => Promise<Response>,
    options?: T,
) => (request: NextRequest, next: NextFetchEvent) => Promise<Response>;

export interface RoleMiddlewareConfig {
    path: string;
    roles: UserRole[];
}
