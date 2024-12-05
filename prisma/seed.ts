import { PrismaClient } from '@prisma/client';
import { locationsSeederTest } from './seeders/locations.ts';

const prisma = new PrismaClient();

try {
    await locationsSeederTest(prisma);
} catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
} finally {
    await prisma.$disconnect();
}
