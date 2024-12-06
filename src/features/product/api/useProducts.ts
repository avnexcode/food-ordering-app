import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';
import type { ApiResponse } from '@/types/client/api';
import { type Product } from '@prisma/client';

export const useProducts = () =>
    useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response =
                await axiosInstance.get<ApiResponse<Product>>('/products');
            return response.data.data;
        },
    });
