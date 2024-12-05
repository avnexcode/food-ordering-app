import { validateSchema } from '@/server/service';
import type {
    AddressWithRelations,
    CreateAddressRequest,
    UpdateAddressRequest,
} from './address.model';
import { addressRepository } from './address.repository';
import { createAddressSchema, updateAddressSchema } from './address.validation';
import { NotFoundException } from '@/server/lib/error.exception';
import type { Address } from '@prisma/client';
import { userService } from '../user';
import {
    toAddressResponse,
    toAddressWithRelationsResponse,
} from '@/server/utils/response/address-api-response';

export const addressService = {
    getAll: async (): Promise<AddressWithRelations[]> => {
        const response = await addressRepository.findMany();

        const addresses = response?.map(address =>
            toAddressWithRelationsResponse(address),
        );

        return addresses!;
    },

    getById: async (id: string): Promise<AddressWithRelations> => {
        const address = await addressRepository.findUniqueId(id);

        if (!address) {
            throw new NotFoundException('Address not found');
        }

        return toAddressWithRelationsResponse(address);
    },

    create: async (
        request: CreateAddressRequest,
        user_id: string,
    ): Promise<Address> => {
        const user = await userService.getById(user_id);

        const validatedRequest: CreateAddressRequest = validateSchema(
            createAddressSchema,
            request,
        );

        const address = await addressRepository.insertOnce(
            validatedRequest,
            user.id,
        );

        return toAddressResponse(address);
    },

    update: async (
        id: string,
        request: UpdateAddressRequest,
    ): Promise<Address> => {
        await addressService.getById(id);

        const validatedRequest: UpdateAddressRequest = validateSchema(
            updateAddressSchema,
            request,
        );

        const address = await addressRepository.updateOnce(
            id,
            validatedRequest,
        );

        return toAddressResponse(address);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await addressService.getById(id);

        await addressRepository.deleteOnce(id);

        return { id };
    },
};
