import { type z } from 'zod';
import type {
    updateAddressSchema,
    createAddressSchema,
} from './address.validation';
import { type Prisma } from '@prisma/client';
import type { UserResponse } from '../user/user.model';

export type CreateAddressRequest = z.infer<typeof createAddressSchema>;
export type UpdateAddressRequest = z.infer<typeof updateAddressSchema>;

export type AddressWithRelations = Prisma.AddressGetPayload<{
    include: {
        province: true;
        regency: true;
        district: true;
        village: true;
    };
}> & {
    user: UserResponse | null;
};
