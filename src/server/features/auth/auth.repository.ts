import { db } from "@/server/database/db";
import { type User } from "@prisma/client";
import { v4 as uuid } from "uuid";

export const setToken = async (email: string): Promise<User> => {
    const user = await db.user.update({
        where: { email },
        data: {
            token: uuid(),
        },
    });

    return user;
};

export const removeToken = async (email: string): Promise<User> => {
    const user = await db.user.update({
        where: { email },
        data: {
            token: null,
        },
    });

    return user;
};
