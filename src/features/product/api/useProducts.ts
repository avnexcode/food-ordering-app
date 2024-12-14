import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import type { ProductWithRelations } from '../types';

export const useProducts = () =>
    useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response =
                await axiosInstance.get<ApiResponse<ProductWithRelations>>(
                    '/products',
                );
            return response.data.data;
        },
    });
