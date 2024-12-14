import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { type Address } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useAddressId = (id?: string) => {
    return useQuery({
        queryKey: ['addresses', id],
        queryFn: async () => {
            if (!id) throw new Error('Tidak ada id');
            const response = await axiosAuth.get<ApiResponse<Address>>(
                `/addresses/${id}`,
            );
            return response.data.data;
        },
    });
};
