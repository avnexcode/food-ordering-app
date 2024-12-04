import {
    PrismaClient,
    type District,
    type Province,
    type Regency,
    type Village,
} from '@prisma/client';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

function readJsonFile<T>(filePath: string): T {
    try {
        const fileContent = readFileSync(resolve(__dirname, filePath), 'utf8');
        const parsedData = JSON.parse(fileContent) as T;

        if (
            !Array.isArray(parsedData) ||
            !parsedData.every(
                item =>
                    typeof item === 'object' && 'id' in item && 'name' in item,
            )
        ) {
            throw new Error(`Invalid data structure in ${filePath}`);
        }

        return parsedData;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        throw error;
    }
}

async function seedData() {
    try {
        const provinces = readJsonFile<Province[]>('json/provinces.json');
        const regencies = readJsonFile<Regency[]>('json/regencies.json');
        const districts = readJsonFile<District[]>('json/districts.json');
        const villages = readJsonFile<Village[]>('json/villages.json');

        for (const province of provinces) {
            const id = Number(province.id);

            if (isNaN(id)) {
                console.error(`Invalid province ID: ${province.id}`);
                continue;
            }
            await prisma.province.upsert({
                where: { id },
                update: {},
                create: { ...province, id },
            });
        }

        for (const regency of regencies) {
            const id = Number(regency.id);

            if (isNaN(id)) {
                console.error(`Invalid regency ID: ${regency.id}`);
                continue;
            }
            await prisma.regency.upsert({
                where: { id: Number(regency.id) },
                update: {},
                create: { ...regency, id },
            });
        }

        // for (const district of districts) {
        //     const id = Number(district.id);

        //     if (isNaN(id)) {
        //         console.error(`Invalid district ID: ${district.id}`);
        //         continue;
        //     }
        //     await prisma.district.upsert({
        //         where: { id: Number(district.id) },
        //         update: {},
        //         create: { ...district, id },
        //     });
        // }

        // for (const village of villages) {
        //     const id = Number(village.id);

        //     if (isNaN(id)) {
        //         console.error(`Invalid village ID: ${village.id}`);
        //         continue;
        //     }
        //     await prisma.village.upsert({
        //         where: { id: Number(village.id) },
        //         update: {},
        //         create: { ...village, id },
        //     });
        // }

        console.log('Seeding completed successfully!');
    } catch (error) {
        console.error('Error in seedData:', error);
        throw error;
    }
}

try {
    await seedData();
} catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
} finally {
    await prisma.$disconnect();
}
