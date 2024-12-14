import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { type User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<User[]>>('/users');
            return response.data.data;
        },
    });
};
