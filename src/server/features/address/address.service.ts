import { validateSchema } from "@/server/service";
import type {
    CreateAddressRequest,
    UpdateAddressRequest,
} from "./address.model";
import {
    destroyAddress,
    findAddressById,
    findAddresses,
    insertAddressOne,
    updateAddressOne,
} from "./address.repository";
import { createAddressSchema, updateAddressSchema } from "./address.validation";
import { NotFoundException } from "@/server/lib/error.exception";

export const getAddresses = async () => {
    const addresses = await findAddresses();
    return addresses;
};

export const getAddressById = async (id: string) => {
    const address = await findAddressById(id);

    if (!address) {
        throw new NotFoundException('Address not found')
    }

    return address;
};

export const createAddress = async (request: CreateAddressRequest) => {
    const validatedCreateAddressRequest: CreateAddressRequest = validateSchema(
        createAddressSchema,
        request,
    );

    const address = await insertAddressOne(validatedCreateAddressRequest);

    return address;
};

export const updateAddress = async (
    id: string,
    request: UpdateAddressRequest,
) => {
    await getAddressById(id)

    const validatedUpdateAddressRequest: UpdateAddressRequest = validateSchema(
        updateAddressSchema,
        request,
    );

    const address = await updateAddressOne(id, validatedUpdateAddressRequest);

    return address;
};

export const deleteAddress = async (id: string) => {
    await getAddressById(id)

    await destroyAddress(id);

    return { id };
};
