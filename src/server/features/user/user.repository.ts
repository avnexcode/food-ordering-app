import { db } from '@/server/database/db';
import { UserRole, type User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { type RegisterRequest } from '../auth/auth.model';
import type { UpdateUserRequest, UserWithRelations } from './user.model';

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

    insertOne: async (request: RegisterRequest): Promise<User> => {
        const id = uuid();

        const passwordHashed = request.password
            ? await bcrypt.hash(request.password, 10)
            : null;

        const username = `user-${id.slice(0, 8)}`;

        const newUserData = {
            id,
            username,
            name: request.name,
            email: request.email,
            role: UserRole.USER,
            password: passwordHashed,
            provider: request.provider ?? 'credentials',
            image: request.image ?? null,
            created_at: new Date(),
            updated_at: new Date(),
        };

        const user = await db.user.create({
            data: newUserData,
        });

        return user;
    },

    updateOne: async (
        id: string,
        request: UpdateUserRequest,
    ): Promise<User> => {
        const existingUser = await userRepository.findUniqueId(id);

        const passwordHashed = request.password
            ? await bcrypt.hash(request.password, 10)
            : existingUser?.password;

        const updateUserData = {
            username: request.username ?? existingUser?.username,
            name: request.name ?? existingUser?.name,
            email: request.email ?? existingUser?.email,
            phone: request.phone ?? existingUser?.phone,
            role: (request.role as UserRole) ?? existingUser?.role,
            provider: request.provider ?? existingUser?.provider,
            password: passwordHashed,
            store_id: request.store_id ?? existingUser?.store_id,
            image: request.image ?? existingUser?.image,
            updated_at: new Date(),
        };

        const user = await db.user.update({
            where: { id },
            data: updateUserData,
        });

        return user;
    },

    deleteOne: async (id: string): Promise<User> => {
        const user = await db.user.delete({
            where: { id },
        });

        return user;
    },
};
