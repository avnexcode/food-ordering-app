import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { type ProductCategory } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useProductCategories = () => {
    return useQuery({
        queryKey: ['product-categories'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<ProductCategory[]>>(
                    '/product-categories',
                );
            return response.data.data;
        },
    });
};
