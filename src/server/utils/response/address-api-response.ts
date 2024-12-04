import type { AddressWithRelations } from '@/server/features/address/address.model';
import { type Address } from '@prisma/client';
import { toUserResponse } from './user-api-response';

export const toAddressResponse = (address: Address): Address => ({
    id: address.id,
    label: address.label,
    street: address.street,
    village_id: address.village_id,
    district_id: address.district_id,
    city_id: address.city_id,
    province_id: address.province_id,
    country: address.country,
    postal_code: address.postal_code,
    description: address.description,
    is_default: address.is_default,
    user_id: address.user_id,
    latitude: address.latitude,
    longitude: address.longitude,
    created_at: address.created_at,
    updated_at: address.updated_at,
});

export const toAddressWithRelationsResponse = (
    address: AddressWithRelations,
): AddressWithRelations => ({
    ...toAddressResponse(address),
    user: toUserResponse(address.user!),
    village: address.village,
    district: address.district,
    regency: address.regency,
    province: address.province,
});
