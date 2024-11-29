import {
    loginSchema,
    registerSchema,
} from '@/server/features/auth/auth.validation';
import { userRepository } from '../user/user.repository';
import bcrypt from 'bcrypt';
import { validateSchema } from '@/server/service';
import { authRepository } from './auth.repository';
import { BadRequestException } from '@/server/lib/error.exception';
import { toUserResponse } from '@/server/utils/toUserResponse';
import { updateUserSchema } from '@/server/features/user/user.validation';
import { type LoginRequest, type RegisterRequest } from './auth.model';
import { type UpdateUserRequest } from '../user/user.model';

export const authService = {
    register: async (request: RegisterRequest) => {
        if (!request.password) {
            throw new BadRequestException('Password required');
        }

        const validatedRequest: RegisterRequest = validateSchema(
            registerSchema,
            request,
        );

        const emailExists = await userRepository.countByEmail(
            validatedRequest.email,
        );

        if (emailExists !== 0) {
            throw new BadRequestException(`Email already exists`);
        }

        const user = await userRepository.insertOne(validatedRequest);

        return toUserResponse(user);
    },

    login: async (request: LoginRequest) => {
        const validatedRequest: LoginRequest = validateSchema(
            loginSchema,
            request,
        );

        let user = await userRepository.findUniqueByEmail(
            validatedRequest.email,
        );

        if (!user) {
            throw new BadRequestException(`Email or password is invalid`);
        }

        if (user.password && user.provider === 'credentials') {
            const validatedPassword = await bcrypt.compare(
                validatedRequest.password,
                user.password,
            );
            if (!validatedPassword) {
                throw new BadRequestException(`Email or password is invalid`);
            }
        }

        user = await authRepository.setToken(validatedRequest.email);

        return toUserResponse(user);
    },

    loginWithGoogle: async (request: UpdateUserRequest) => {
        const validatedRequest: UpdateUserRequest = validateSchema(
            updateUserSchema,
            request,
        );

        const user = await userRepository.findUniqueByEmail(
            validatedRequest.email!,
        );

        if (user) {
            const updateUserData = {
                provider: user.provider ?? undefined,
                name: user.name,
                email: user.email,
            };

            await userRepository.updateOne(user.id, updateUserData);
        } else {
            const { name, email } = validatedRequest as {
                name: string;
                email: string;
            };

            const newUserData = {
                ...validatedRequest,
                name,
                email,
            };

            await userRepository.insertOne(newUserData);
        }

        return user;
    },
};
