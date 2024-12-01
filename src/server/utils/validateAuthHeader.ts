import type { NextRequest } from 'next/server';
import { UnauthorizedException } from '../lib/error.exception';

export const validateAuthHeader = (request: NextRequest): string => {
    const authHeader = request.headers.get('authorization');

    if (!authHeader?.startsWith('Bearer ')) {
        throw new UnauthorizedException(
            'Missing or invalid authorization token',
        );
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        throw new UnauthorizedException('Missing token or secret');
    }

    return token;
};
