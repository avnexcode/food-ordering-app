import { db } from '@/server/database/db';
import type {
    UpdateAddressRequest,
    CreateAddressRequest,
    AddressWithRelations,
} from '@/server/features/address/address.model';
import type { Address } from '@prisma/client';

export const addressRepository = {
    findMany: async (
        user_id: string,
    ): Promise<AddressWithRelations[] | null> => {
        const addresses = await db.address.findMany({
            where: { user: { id: user_id } },
            include: {
                user: true,
                province: true,
                regency: true,
                district: true,
                village: true,
            },
        });

        return addresses;
    },

    findUniqueId: async (id: string): Promise<AddressWithRelations | null> => {
        const address = await db.address.findUnique({
            where: { id },
            include: {
                user: true,
                province: true,
                regency: true,
                district: true,
                village: true,
            },
        });

        return address;
    },

    countById: async (id: string): Promise<number> => {
        const addressCount = await db.address.count({ where: { id } });

        return addressCount;
    },

    insertOnce: async (
        request: CreateAddressRequest,
        user_id: string,
    ): Promise<Address> => {
        const newAddressData = {
            ...request,
            user_id,
        };

        const address = await db.address.create({ data: newAddressData });

        return address;
    },

    updateOnce: async (
        id: string,
        request: UpdateAddressRequest,
    ): Promise<Address> => {
        const updateAddressData = {
            ...request,
        };

        const address = await db.address.update({
            where: { id },
            data: updateAddressData,
        });

        return address;
    },

    deleteOnce: async (id: string): Promise<Address> => {
        const address = await db.address.delete({ where: { id } });

        return address;
    },
};
