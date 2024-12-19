import { axiosAuth } from '@/lib/axios';
import { type ApiResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import type { ProductCategoryWithRelations } from '../types';

export const useProductCategoriesId = (id?: string) => {
    return useQuery({
        queryKey: ['product-category', id],
        queryFn: async () => {
            if (!id) throw new Error('Tidak Ada Id');
            const response = await axiosAuth.get<
                ApiResponse<ProductCategoryWithRelations>
            >(`/product-categories/${id}`);
            return response.data.data;
        },
    });
};
