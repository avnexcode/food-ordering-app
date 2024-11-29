import { validateSchema } from '@/server/service';
import type {
    CreateAddressRequest,
    UpdateAddressRequest,
} from './address.model';
import { addressRepository } from './address.repository';
import { createAddressSchema, updateAddressSchema } from './address.validation';
import { NotFoundException } from '@/server/lib/error.exception';

export const addressService = {
    getAll: async () => {
        const addresses = await addressRepository.findMany();
        return addresses;
    },

    getById: async (id: string) => {
        const address = await addressRepository.findUniqueId(id);

        if (!address) {
            throw new NotFoundException('Address not found');
        }

        return address;
    },

    create: async (request: CreateAddressRequest) => {
        const validatedRequest: CreateAddressRequest = validateSchema(
            createAddressSchema,
            request,
        );

        const address = await addressRepository.insertOne(validatedRequest);

        return address;
    },

    update: async (id: string, request: UpdateAddressRequest) => {
        await addressService.getById(id);

        const validatedRequest: UpdateAddressRequest = validateSchema(
            updateAddressSchema,
            request,
        );

        const address = await addressRepository.updateOne(id, validatedRequest);

        return address;
    },

    delete: async (id: string) => {
        await addressService.getById(id);

        await addressRepository.deleteOne(id);

        return { id };
    },
};
