import type {
    SafeUserWithAddressRelation,
    SafeUserWithRelations,
    UserResponse,
    UserWithRelations,
} from '../../features/user/user.model';

export const toUserResponse = (user: UserResponse): UserResponse => ({
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    provider: user.provider,
    image: user.image,
    token: user.token,
    refresh_token: user.refresh_token,
    store_id: user.store_id,
    created_at: user.created_at,
    updated_at: user.updated_at,
});

export const toUserWithRelationsResponse = (
    user: UserWithRelations,
): SafeUserWithRelations => ({
    ...toUserResponse(user),
    // relations
    store: user.store,
    addresses: user.addresses,
    orders: user.orders,
});

export const toUserWithAddressRelationResponse = (
    user: SafeUserWithAddressRelation,
): SafeUserWithAddressRelation => ({
    ...toUserResponse(user),
    // relations
    addresses: user.addresses,
});
