import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { type Village } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useVillages = () => {
    return useQuery({
        queryKey: ['villages'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<Village[]>>(
                '/locations/villages',
            );
            return response.data.data;
        },
    });
};
