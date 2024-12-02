import { ErrorFilter } from '@/server/filter/error.filter';
import { UnauthorizedException } from '@/server/lib/error.exception';
import { type MiddlewareFactory } from '@/types/middleware';
import { type NextFetchEvent, type NextRequest } from 'next/server';
import * as jose from 'jose';
import { jwtService } from '@/server/service/jwt.service';
import { createRequestHeaders } from '@/server/utils/createRequestHeader';
import { validateAuthHeader } from '@/server/utils/validateAuthHeader';

export const withAuthToken: MiddlewareFactory<string[]> = (
    middleware,
    protectedApiPaths = [],
) => {
    return async (request: NextRequest, next: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;

        if (!protectedApiPaths.some(path => pathname.startsWith(path))) {
            return middleware(request, next);
        }

        try {
            const token = validateAuthHeader(request);
            const user = await jwtService.verifyToken(token);

            const requestHeaders = new Headers(request.headers);
            requestHeaders.set('x-user-id', String(user.id));

            const newRequest = createRequestHeaders(request, requestHeaders);

            return middleware(newRequest, next);
        } catch (error) {
            if (error instanceof jose.errors.JWTExpired) {
                return ErrorFilter.catch(
                    new UnauthorizedException('Token has expired'),
                );
            }
            if (error instanceof jose.errors.JWSSignatureVerificationFailed) {
                return ErrorFilter.catch(
                    new UnauthorizedException('Invalid token signature'),
                );
            }
            return ErrorFilter.catch(error);
        }
    };
};
