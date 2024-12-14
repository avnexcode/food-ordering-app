import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import type { User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useUserById = ({ id }: { id?: string }) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: async (): Promise<User> => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.get<ApiResponse<User>>(
                `/users/${id}`,
            );
            return response.data.data;
        },
    });
};
