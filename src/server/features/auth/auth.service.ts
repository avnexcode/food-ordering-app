import {
    type LoginRequest,
    type RegisterRequest,
} from "@/server/model/auth.model";
import {
    loginSchema,
    registerSchema,
} from "@/server/validation-schema/auth.validation";
import {
    countUserByEmail,
    findUserByEmail,
    insertUser,
} from "../user/user.repository";
import bcrypt from "bcrypt";
import { validateSchema } from "@/server/service";
import { setToken } from "./auth.repository";
import { BadRequestException } from "@/server/lib/error.exception";
import { toUserResponse } from "@/server/utils/toUserResponse";
import { type User } from "@prisma/client";

export const register = async (request: RegisterRequest) => {
    const validatedRegisterRequest: RegisterRequest = validateSchema(
        registerSchema,
        request,
    );

    const emailExists = await countUserByEmail(validatedRegisterRequest.email);

    if (emailExists !== 0) {
        throw new BadRequestException(`Email already exists`);
    }

    const user = await insertUser(validatedRegisterRequest);

    return toUserResponse(user)
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

    const validatedPassword = await bcrypt.compare(
        validatedLoginRequest.password,
        user.password,
    );

    if (!validatedPassword) {
        throw new BadRequestException(`Email or password is invalid`);
    }

    user = await setToken(validatedLoginRequest.email);

    return toUserResponse(user)
};

// export const loginWithGoole = async (user: User) => { }