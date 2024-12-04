import { db } from '@/server/database/db';
import { UserRole, type User } from '@prisma/client';
import { type RegisterRequest } from '../auth/auth.model';
import type { UpdateUserRequest, UserWithRelations } from './user.model';
import { v4 as uuid } from 'uuid';

export const userRepository = {
    findMany: async (): Promise<UserWithRelations[] | null> => {
        const users = await db.user.findMany({
            include: { store: true, addresses: true, orders: true },
        });

        return users;
    },

    findUniqueEmail: async (
        email: string,
    ): Promise<UserWithRelations | null> => {
        const user = await db.user.findUnique({
            where: { email },
            include: { store: true, addresses: true, orders: true },
        });

        return user;
    },

    findUniqueId: async (id: string): Promise<UserWithRelations | null> => {
        const user = await db.user.findUnique({
            where: { id },
            include: { store: true, addresses: true, orders: true },
        });

        return user;
    },

    countByEmail: async (email: string): Promise<number> => {
        const userCount = await db.user.count({ where: { email } });

        return userCount;
    },

    countById: async (id: string): Promise<number> => {
        const userCount = await db.user.count({ where: { id } });

        return userCount;
    },

    insertOnce: async (request: RegisterRequest): Promise<User> => {
        const id = uuid();
        const username = `user-${id.slice(0, 8)}`;

        const user = await db.user.create({
            data: {
                ...request,
                id,
                username,
                role: UserRole.USER,
                provider: request.provider ?? 'credentials',
            },
        });

        return user;
    },

    updateOnce: async (
        id: string,
        request: UpdateUserRequest,
    ): Promise<User> => {
        const user = await db.user.update({
            where: { id },
            data: { ...request },
        });

        return user;
    },

    deleteOnce: async (id: string): Promise<User> => {
        const user = await db.user.delete({
            where: { id },
        });

        return user;
    },
};
