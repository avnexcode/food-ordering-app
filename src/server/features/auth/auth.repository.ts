import { env } from '@/env';
import { db } from '@/server/database/db';
import { type User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import type { JWTPayload } from '@/types';
import { jwtService } from '@/server/service/jwt.service';
import { v4 as uuid } from 'uuid';
export const authRepository = {
    setAccessToken: async (email: string): Promise<User> => {
        const userExists = await db.user.findUnique({ where: { email } });

        const payload = {
            id: userExists?.id,
            role: userExists?.role,
        } as JWTPayload;

        const token = await jwtService.createToken(payload);

        const user = await db.user.update({
            where: { email },
            data: {
                token,
            },
        });

        return user;
    },

    removeAccessToken: async (email: string): Promise<User> => {
        const user = await db.user.update({
            where: { email },
            data: {
                token: null,
            },
        });

        return user;
    },

    setRefreshToken: async (email: string) => {
        const user = await db.user.update({
            where: { email },
            data: {
                refresh_token: uuid(),
            },
        });

        return user;
    },

    removeRefreshToken: async (email: string) => {
        const user = await db.user.update({
            where: { email },
            data: {
                refresh_token: null,
            },
        });

        return user;
    },

    veryfyToken: async (token: string) => {
        const secret = env.AUTH_SECRET;

        const user = jwt.verify(token, secret);

        return user;
    },
};
