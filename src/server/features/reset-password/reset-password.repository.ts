import { db } from '@/server/database/db';
import { type User } from '@prisma/client';

export const resetPasswordRepository = {
    updateOnce: async (id: string, password: string): Promise<User> => {
        const user = await db.user.update({
            where: { id },
            data: { password },
        });

        return user;
    },
};
