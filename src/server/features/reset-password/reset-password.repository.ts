import { db } from '@/server/database/db';
import { type User } from '@prisma/client';
import bcrypt from 'bcrypt';
export const resetPasswordRepository = {
    update: async (id: string, password: string): Promise<User> => {
        const passwordHashed = await bcrypt.hash(password, 10);

        const user = await db.user.update({
            where: { id },
            data: { password: passwordHashed },
        });

        return user;
    },
};
