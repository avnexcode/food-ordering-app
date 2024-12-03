import type { Prisma, User } from '@prisma/client';
import type { z } from 'zod';
import type { updateUserSchema } from './user.validation';

export type UpdateUserRequest = z.infer<typeof updateUserSchema>;

export type UserWithRelations = Prisma.UserGetPayload<{
    include: {
        store: true;
        addresses: true;
        orders: true;
    };
}>;

export type SafeUserWithRelations = Omit<
    UserWithRelations,
    'password' | 'store_id'
>;

export type UserResponse = Omit<User, 'password' | 'store_id'>;
