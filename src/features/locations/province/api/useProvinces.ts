import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { type Province } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useProvinces = () => {
    return useQuery({
        queryKey: ['provinces'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<Province[]>>(
                '/locations/provinces',
            );
            return response.data.data;
        },
    });
};
