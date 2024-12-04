import { NotFoundException } from '@/server/lib/error.exception';
import { userRepository } from './user.repository';
import {
    toUserResponse,
    toUserWithRelationResponse,
} from '@/server/utils/response/user-api-response';
import type { UpdateUserRequest } from './user.model';
import { validateSchema } from '@/server/service';
import { updateUserSchema } from './user.validation';

export const userService = {
    getAll: async () => {
        const data = await userRepository.findMany();

        const users = data?.map(user => toUserWithRelationResponse(user));

        return users;
    },

    getById: async (id: string) => {
        const user = await userRepository.findUniqueId(id);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return toUserWithRelationResponse(user);
    },

    getByEmail: async (email: string) => {
        const user = await userRepository.findUniqueEmail(email);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        toUserWithRelationResponse(user);
    },

    update: async (id: string, request: UpdateUserRequest) => {
        await userService.getById(id);

        const validatedRequest: UpdateUserRequest = validateSchema(
            updateUserSchema,
            request,
        );

        const user = await userRepository.updateOnce(id, validatedRequest);

        return toUserResponse(user);
    },

    delete: async (id: string) => {
        await userService.getById(id);

        await userRepository.deleteOnce(id);

        return { id };
    },
};
