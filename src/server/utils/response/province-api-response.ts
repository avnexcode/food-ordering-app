import { type Province } from '@prisma/client';

export const toProvinceResponse = (province: Province) => ({
    id: province.id,
    name: province.name,
    alt_name: province.alt_name,
    latitude: province.latitude,
    longitude: province.longitude,
});
