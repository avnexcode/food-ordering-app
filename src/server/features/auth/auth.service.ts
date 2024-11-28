import {
    loginSchema,
    registerSchema,
} from "@/server/features/auth/auth.validation";
import {
    countUserByEmail,
    findUserByEmail,
    insertUserOne,
    updateUserOne,
} from "../user/user.repository";
import bcrypt from "bcrypt";
import { validateSchema } from "@/server/service";
import { setToken } from "./auth.repository";
import { BadRequestException } from "@/server/lib/error.exception";
import { toUserResponse } from "@/server/utils/toUserResponse";
import { updateUserSchema } from "@/server/features/user/user.validation";
import { type LoginRequest, type RegisterRequest } from "./auth.model";
import { type UpdateUserRequest } from "../user/user.model";

export const register = async (request: RegisterRequest) => {
    if (!request.password) {
        throw new BadRequestException("Password required");
    }

    const validatedRegisterRequest: RegisterRequest = validateSchema(
        registerSchema,
        request,
    );

    const emailExists = await countUserByEmail(validatedRegisterRequest.email);

    if (emailExists !== 0) {
        throw new BadRequestException(`Email already exists`);
    }

    const user = await insertUserOne(validatedRegisterRequest);

    return toUserResponse(user);
};

export const login = async (request: LoginRequest) => {
    const validatedLoginRequest: LoginRequest = validateSchema(
        loginSchema,
        request,
    );

    let user = await findUserByEmail(validatedLoginRequest.email);

    if (!user) {
        throw new BadRequestException(`Email or password is invalid`);
    }

    if (user.password && user.provider === "credentials") {
        const validatedPassword = await bcrypt.compare(
            validatedLoginRequest.password,
            user.password,
        );
        if (!validatedPassword) {
            throw new BadRequestException(`Email or password is invalid`);
        }
    }

    user = await setToken(validatedLoginRequest.email);

    return toUserResponse(user);
};

export const loginWithGoogle = async (request: UpdateUserRequest) => {
    const validatedUpdateUserRequest: UpdateUserRequest = validateSchema(
        updateUserSchema,
        request,
    );

    const user = await findUserByEmail(validatedUpdateUserRequest.email!);

    if (user) {
        const updateUserData = {
            provider: user.provider ?? undefined,
            name: user.name,
            email: user.email,
        };

        await updateUserOne(user.id, updateUserData);
    } else {
        const { name, email } = validatedUpdateUserRequest as {
            name: string;
            email: string;
        };

        const newUserData = {
            ...validatedUpdateUserRequest,
            name,
            email,
        };

        await insertUserOne(newUserData);
    }

    return user;
};
