import { NotFoundException } from '@/server/lib/error.exception';
import { userRepository } from './user.repository';
import { toUserResponse } from '@/server/utils/toUserResponse';
import { type UpdateUserRequest } from './user.model';

export const userService = {
    getAll: async () => {
        const data = await userRepository.findMany();

        const users = data.map(user => toUserResponse(user));

        return users;
    },

    getById: async (id: string) => {
        const user = await userRepository.findUniqueId(id);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return toUserResponse(user);
    },

    getByEmail: async (email: string) => {
        const user = await userRepository.findUniqueEmail(email);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return toUserResponse(user);
    },

    update: async (id: string, data: UpdateUserRequest) => {
        await userService.getById(id);

        const user = await userRepository.updateOne(id, data);

        return toUserResponse(user);
    },

    delete: async (id: string) => {
        await userService.getById(id);

        await userRepository.deleteOne(id);

        return { id };
    },
};
