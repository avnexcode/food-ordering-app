import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { type Product } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useProductId = (id?: string) => {
    return useQuery({
        queryKey: ['products', id],
        queryFn: async () => {
            if (!id) throw new Error('Tidak ada id');
            const response = await axiosAuth.get<ApiResponse<Product>>(
                `/products/${id}`,
            );

            return response.data.data;
        },
    });
};
