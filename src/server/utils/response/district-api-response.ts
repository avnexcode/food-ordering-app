import { type District } from '@prisma/client';
import type { DistrictWithRelations } from '../../features/location/district/district.model';

export const toDistrictResponse = (district: District): District => ({
    id: district.id,
    regency_id: district.regency_id,
    name: district.name,
    alt_name: district.alt_name,
    latitude: district.latitude,
    longitude: district.longitude,
});

export const toDistrictWithRelationsResponse = (
    district: DistrictWithRelations,
): DistrictWithRelations => ({
    ...toDistrictResponse(district),
    regency: district.regency,
    villages: district.villages,
    addresses: district.addresses,
});
