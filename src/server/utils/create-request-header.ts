import { NextRequest } from 'next/server';

export const createRequestHeaders = (
    request: NextRequest,
    requestHeaders: HeadersInit,
): NextRequest => {
    return new NextRequest(request.url, {
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
};
