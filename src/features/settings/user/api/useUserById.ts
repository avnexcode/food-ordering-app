import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/client/api';
import type { User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useUserById = (id?: string) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: async (): Promise<User> => {
            if (!id) throw new Error('ID and token are required');

            const response = await axiosAuth.get<ApiResponse<User>>(
                `/users/${id}`,
            );

            return response.data.data;
        },
    });
};
