import { db } from '@/server/database/db';
import {
    type UpdateAddressRequest,
    type CreateAddressRequest,
} from '@/server/features/address/address.model';

export const addressRepository = {
    findMany: async () => {
        const addresses = await db.address.findMany();
        return addresses;
    },

    findUniqueId: async (id: string) => {
        const address = await db.address.findUnique({ where: { id } });
        return address;
    },

    countById: async (id: string) => {
        const address = await db.address.count({ where: { id } });
        return address;
    },

    insertOne: async (request: CreateAddressRequest) => {
        const newAddressData = {
            ...request,
            street: request.street,
            city: request.city,
            province: request.province,
        };

        const address = await db.address.create({ data: newAddressData });

        return address;
    },

    updateOne: async (id: string, request: UpdateAddressRequest) => {
        const updateAddressData = {
            ...request,
        };

        const address = await db.address.update({
            where: { id },
            data: updateAddressData,
        });

        return address;
    },

    deleteOne: async (id: string) => {
        const address = await db.address.delete({ where: { id } });

        return address;
    },
};
