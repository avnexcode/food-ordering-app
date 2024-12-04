import { NotFoundException } from '@/server/lib/error.exception';
import { userRepository } from './user.repository';
import {
    toUserResponse,
    toUserWithRelationsResponse,
} from '@/server/utils/response/user-api-response';
import type {
    SafeUserWithRelations,
    UpdateUserRequest,
    UserResponse,
} from './user.model';
import { validateSchema } from '@/server/service';
import { updateUserSchema } from './user.validation';

export const userService = {
    getAll: async (): Promise<SafeUserWithRelations[]> => {
        const response = await userRepository.findMany();

        const users = response?.map(user => toUserWithRelationsResponse(user));

        return users!;
    },

    getById: async (id: string): Promise<SafeUserWithRelations> => {
        const user = await userRepository.findUniqueId(id);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return toUserWithRelationsResponse(user);
    },

    getByEmail: async (email: string): Promise<SafeUserWithRelations> => {
        const user = await userRepository.findUniqueEmail(email);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return toUserWithRelationsResponse(user);
    },

    update: async (
        id: string,
        request: UpdateUserRequest,
    ): Promise<UserResponse> => {
        const existingUser = await userService.getById(id);

        const validatedRequest: UpdateUserRequest = validateSchema(
            updateUserSchema,
            request,
        );

        const updateUserData: UpdateUserRequest = {
            username: validatedRequest.username ?? existingUser?.username,
            name: validatedRequest.name ?? existingUser?.name,
            email: validatedRequest.email ?? existingUser?.email,
            phone: validatedRequest.phone ?? existingUser?.phone ?? undefined,
            role: validatedRequest.role ?? existingUser?.role,
            provider: validatedRequest.provider ?? existingUser?.provider,
            store_id:
                validatedRequest.store_id ??
                existingUser?.store_id ??
                undefined,
            image: validatedRequest.image ?? existingUser?.image ?? undefined,
        };

        const user = await userRepository.updateOnce(id, updateUserData);

        return toUserResponse(user);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await userService.getById(id);

        await userRepository.deleteOnce(id);

        return { id };
    },
};
