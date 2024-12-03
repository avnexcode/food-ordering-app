import {
    loginSchema,
    registerSchema,
} from '@/server/features/auth/auth.validation';
import { userRepository } from '../user/user.repository';
import bcrypt from 'bcrypt';
import { validateSchema } from '@/server/service';
import { authRepository } from './auth.repository';
import { BadRequestException } from '@/server/lib/error.exception';
import { toUserResponse } from '@/server/utils/response/user-api-response';
import { updateUserSchema } from '@/server/features/user/user.validation';
import type { LoginRequest, RegisterRequest } from './auth.model';
import type {
    UserResponse,
    UpdateUserRequest,
    UserWithRelations,
} from '../user/user.model';
import type { User } from '@prisma/client';

export const authService = {
    register: async (request: RegisterRequest): Promise<UserResponse> => {
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

    login: async (request: LoginRequest): Promise<UserResponse> => {
        const validatedRequest: LoginRequest = validateSchema(
            loginSchema,
            request,
        );

        let user = await userRepository.findUniqueEmail(validatedRequest.email);

        if (!user) {
            throw new BadRequestException(`Email or password is invalid`);
        }

        if (user.password) {
            const validatedPassword = await bcrypt.compare(
                validatedRequest.password,
                user.password,
            );

            if (!validatedPassword) {
                throw new BadRequestException(`Email or password is invalid`);
            }
        }

        user = (await authRepository.setToken(
            validatedRequest.email,
        )) as UserWithRelations;

        return toUserResponse(user);
    },

    loginWithGoogle: async (
        request: UpdateUserRequest,
    ): Promise<UserResponse> => {
        const validatedRequest: UpdateUserRequest = validateSchema(
            updateUserSchema,
            request,
        );

        const userExists = await userRepository.findUniqueEmail(
            validatedRequest.email!,
        );

        let user: User;

        if (userExists) {
            const updateUserData = {
                provider: validatedRequest.provider,
                name: validatedRequest.name,
                email: validatedRequest.email,
                image: validatedRequest.image,
            };

            user = await userRepository.updateOne(
                userExists.id,
                updateUserData,
            );
        } else {
            const { name, email, image } = validatedRequest as {
                name: string;
                email: string;
                image: string;
            };

            const newUserData = {
                ...validatedRequest,
                name,
                email,
                image,
            };

            user = await userRepository.insertOne(newUserData);
        }

        user = await authRepository.setToken(validatedRequest.email!);

        return toUserResponse(user);
    },
};
