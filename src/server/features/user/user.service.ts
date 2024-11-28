import { NotFoundException } from "@/server/lib/error.exception";
import { findUserByEmail, findUserById, findUsers, destroyUser, updateUserOne } from "./user.repository";
import { type UpdateUserRequest } from "@/server/model/user.model";
import { toUserResponse } from "@/server/utils/toUserResponse";

export const getUsers = async () => {
    const data = await findUsers();

    const users = data.map(user => toUserResponse(user))

    return users;
};

export const getUserById = async (id: string) => {
    const user = await findUserById(id);

    if (!user) {
        throw new NotFoundException("User not found");
    }

    return toUserResponse(user)
};

export const getUserByEmail = async (email: string) => {
    const user = await findUserByEmail(email);

    if (!user) {
        throw new NotFoundException("User not found");
    }

    return toUserResponse(user)
};

export const updateUser = async (id: string, data: UpdateUserRequest) => {
    await getUserById(id)

    const user = await updateUserOne(id, data)

    return toUserResponse(user)
}

export const deleteUser = async (id: string) => {
    await getUserById(id)

    const user = await destroyUser(id)

    return { id: user.id }
}