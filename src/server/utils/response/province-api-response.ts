import type { ProvinceWithRelations } from '@/server/features/location/province/province.model';
import { type Province } from '@prisma/client';

export const toProvinceResponse = (province: Province): Province => ({
    id: province.id,
    name: province.name,
    alt_name: province.alt_name,
    latitude: province.latitude,
    longitude: province.longitude,
});

export const toProvinceWithRelationsResponse = (
    province: ProvinceWithRelations,
): ProvinceWithRelations => ({
    ...toProvinceResponse(province),
    regencies: province.regencies,
    addresses: province.addresses,
});
