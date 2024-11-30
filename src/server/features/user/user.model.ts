import type { Address, Store, User, UserRole } from '@prisma/client';
import type { z } from 'zod';
import type { updateUserSchema } from './user.validation';

export type UpdateUserRequest = z.infer<typeof updateUserSchema>;

export interface UserReturn extends User {
    store?: Store | null;
    addresses: Address[];
}

export interface UserResponse {
    id?: string;
    username: string;
    name: string;
    email: string;
    role: UserRole;
    provider?: string;
    store?: Store | null;
    addresses: Address[];
}
