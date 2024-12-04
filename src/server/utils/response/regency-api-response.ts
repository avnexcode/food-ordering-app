import type { RegencyWithRelations } from '@/server/features/location/regency/regency.model';
import { type Regency } from '@prisma/client';

export const toRegencyResponse = (regency: Regency): Regency => ({
    id: regency.id,
    province_id: regency.province_id,
    name: regency.name,
    alt_name: regency.alt_name,
    latitude: regency.latitude,
    longitude: regency.longitude,
});

export const toRegencyWithRelationsResponse = (
    regency: RegencyWithRelations,
): RegencyWithRelations => ({
    ...toRegencyResponse(regency),
    province: regency.province,
    districts: regency.districts,
    addresses: regency.addresses,
});
