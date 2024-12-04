import type { VillageWithRelations } from '@/server/features/location/village/village.model';
import { type Village } from '@prisma/client';

export const toVillageResponse = (village: Village): Village => ({
    id: village.id,
    district_id: village.district_id,
    name: village.name,
    alt_name: village.alt_name,
    latitude: village.latitude,
    longitude: village.longitude,
});

export const toVillageWithRelations = (
    village: VillageWithRelations,
): VillageWithRelations => ({
    ...toVillageResponse(village),
    district: village.district,
    addresses: village.addresses,
});
