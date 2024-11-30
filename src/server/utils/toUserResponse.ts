import type { UserResponse, UserReturn } from '../features/user/user.model';

export const toUserResponse = (user: UserReturn): UserResponse => ({
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    role: user.role,
    store: user.store,
    addresses: user.addresses,
});
