import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/client/api';
import { type Regency } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useRegencies = () => {
    return useQuery({
        queryKey: ['regencies'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<Regency[]>>(
                '/locations/regencies',
            );
            return response.data.data;
        },
    });
};
