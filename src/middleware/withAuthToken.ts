import { env } from '@/env';
import { ErrorFilter } from '@/server/filter/error.filter';
import { UnauthorizedException } from '@/server/lib/error.exception';
import { type MiddlewareFactory } from '@/types/middleware';
import { type NextFetchEvent, NextRequest } from 'next/server';

export const withAuthToken: MiddlewareFactory<string[]> = (
    middleware,
    protectedApiPaths = [],
) => {
    return async (request: NextRequest, next: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;
        if (protectedApiPaths.some(path => pathname.startsWith(path))) {
            try {
                const authHeader = request.headers.get('authorization');

                if (!authHeader?.startsWith('Bearer ')) {
                    throw new UnauthorizedException(
                        'Missing or invalid authorization token',
                    );
                }

                const token = authHeader.split(' ')[1];

                if (token !== env.AUTH_SECRET) {
                    throw new UnauthorizedException(
                        'Invalid authorization token',
                    );
                }

                const requestHeaders = new Headers(request.headers);
                requestHeaders.set('x-api-token', token);

                const newRequest = new NextRequest(request.url, {
                    headers: requestHeaders,
                    method: request.method,
                    body: request.body,
                    cache: request.cache,
                    credentials: request.credentials,
                    integrity: request.integrity,
                    keepalive: request.keepalive,
                    mode: request.mode,
                    redirect: request.redirect,
                });

                return middleware(newRequest, next);
            } catch (error) {
                return ErrorFilter.catch(error);
            }
        }

        return middleware(request, next);
    };
};
