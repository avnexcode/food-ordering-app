import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/client/api';
import { type District } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useDistricts = () => {
    return useQuery({
        queryKey: ['districts'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<District[]>>(
                '/locations/districts',
            );
            return response.data.data;
        },
    });
};
