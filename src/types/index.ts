import type { UserRole } from '@prisma/client';

export type JWTPayload = {
    id: string;
    role: UserRole;
};
