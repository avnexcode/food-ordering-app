import { db } from "@/server/database/db";
import {
    type UpdateAddressRequest,
    type CreateAddressRequest,
} from "@/server/features/address/address.model";

export const findAddresses = async () => {
    const addresses = await db.address.findMany();
    return addresses;
};

export const findAddressById = async (id: string) => {
    const address = await db.address.findUnique({ where: { id } });
    return address;
};

export const countAddressById = async (id: string) => {
    const address = await db.address.count({ where: { id } });
    return address;
};

export const insertAddressOne = async (request: CreateAddressRequest) => {
    const newAddressData = {
        ...request,
        street: request.street,
        city: request.city,
        province: request.province,
    };

    const address = await db.address.create({ data: newAddressData });

    return address;
};

export const updateAddressOne = async (
    id: string,
    request: UpdateAddressRequest,
) => {
    const updateAddressData = {
        ...request,
    };

    const address = await db.address.update({
        where: { id },
        data: updateAddressData,
    });

    return address;
};

export const destroyAddress = async (id: string) => {
    const address = await db.address.delete({ where: { id } });

    return address;
};
