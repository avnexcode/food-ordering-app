import { type User } from '@prisma/client';
import type {
    SafeUserWithRelations,
    UserWithRelations,
} from '../features/user/user.model';

export const toUserResponse = (
    user: User,
): Omit<User, 'password' | 'store_id'> => ({
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    phone: user.phone,
    provider: user.provider,
    role: user.role,
    image: user.image,
    token: user.token,
    refresh_token: user.refresh_token,
    created_at: user.created_at,
    updated_at: user.updated_at,
});

export const toUserWithRelationResponse = (
    user: UserWithRelations,
): SafeUserWithRelations => ({
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    phone: user.phone,
    provider: user.provider,
    role: user.role,
    image: user.image,
    token: user.token,
    refresh_token: user.refresh_token,
    store: user.store,
    addresses: user.addresses,
    orders: user.orders,
    created_at: user.created_at,
    updated_at: user.updated_at,
});
