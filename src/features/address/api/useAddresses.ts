import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { type Address } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useAddresses = () => {
    return useQuery({
        queryKey: ['addresses'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<Address[]>>('/addresses');
            return response.data.data;
        },
    });
};
