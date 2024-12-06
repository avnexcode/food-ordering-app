import { axiosAuth } from '@/lib/axios';
import type { ApiProps, ApiResponse } from '@/types/client/api';
import { type UserRole, type User } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';

export const useUpdateUser = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['users'],
        mutationFn: async ({
            id,
            values,
        }: {
            id?: string;
            values: { role: UserRole };
        }) => {
            if (!id) throw new Error('Tidak ada id');
            const response = await axiosAuth.patch<ApiResponse<User>>(
                `/users/${id}`,
                values,
            );
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
