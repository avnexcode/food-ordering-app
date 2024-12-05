import type {
    PrismaClient,
    District,
    Province,
    Regency,
    Village,
} from '@prisma/client';

import { readJsonFile } from './readFileJson.ts';

export const locationsSeederTest = async (prisma: PrismaClient) => {
    try {
        const provinces = readJsonFile<Province[]>('../json/provinces.json');
        const regencies = readJsonFile<Regency[]>('../json/regencies.json');
        const districts = readJsonFile<District[]>('../json/districts.json');
        const villages = readJsonFile<Village[]>('../json/villages.json');

        await Promise.all(
            provinces.map(
                async province =>
                    province.name === 'JAWA TIMUR' &&
                    (await prisma.province.upsert({
                        where: { id: province.id },
                        update: {},
                        create: { ...province, id: province.id },
                    })),
            ),
        );

        await Promise.all(
            regencies.map(
                async regency =>
                    regency.province_id === '35' &&
                    (await prisma.regency.upsert({
                        where: { id: regency.id },
                        update: {},
                        create: {
                            ...regency,
                            id: regency.id,
                            latitude: regency.latitude ?? 0,
                            longitude: regency.longitude ?? 0,
                        },
                    })),
            ),
        );

        await Promise.all(
            districts.map(
                async district =>
                    district.regency_id === '3505' &&
                    (await prisma.district.upsert({
                        where: { id: district.id },
                        update: {},
                        create: {
                            ...district,
                            id: district.id,
                            latitude: district.latitude ?? 0,
                            longitude: district.longitude ?? 0,
                        },
                    })),
            ),
        );

        await Promise.all(
            villages.map(
                async village =>
                    village.district_id === '3505060' &&
                    (await prisma.village.upsert({
                        where: { id: village.id },
                        update: {},
                        create: {
                            ...village,
                            id: village.id,
                            latitude: village.latitude ?? 0,
                            longitude: village.longitude ?? 0,
                        },
                    })),
            ),
        );

        console.log('Seeding completed successfully!');
    } catch (error) {
        console.error('Error in seedData:', error);
        throw error;
    }
};
