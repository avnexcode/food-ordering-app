import { env } from '@/env';
import { db } from '@/server/database/db';
import { type User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import type { JWTPayload } from '@/types';
import { jwtService } from '@/server/service/jwt.service';

export const authRepository = {
    setToken: async (email: string): Promise<User> => {
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

    removeToken: async (email: string): Promise<User> => {
        const user = await db.user.update({
            where: { email },
            data: {
                token: null,
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
