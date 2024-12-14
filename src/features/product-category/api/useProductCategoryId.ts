import { axiosInstance } from '@/lib/axios';
import { type ApiResponse } from '@/types/api';
import type { ProductCategory } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const useProductCategoriesId = (id?: string) => {
    return useQuery({
        queryKey: ['product-category', id],
        queryFn: async () => {
            if (!id) throw new Error('Tidak Ada Id');
            const response = await axiosInstance.get<ApiResponse<ProductCategory>>(
                `/product-categories/${id}`,
            );
            return response.data.data;
        },
    });
};
