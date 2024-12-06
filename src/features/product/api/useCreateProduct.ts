import type { ApiProps, ApiResponse } from '@/types/client/api';
import { useMutation } from '@tanstack/react-query';
import type { CreateProductFormSchema } from '../types';
import { type Product } from '@prisma/client';
import { axiosAuth } from '@/lib/axios';

export const useCreateProduct = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['products'],
        mutationFn: async (values: CreateProductFormSchema) => {
            const response = await axiosAuth.post<ApiResponse<Product>>(
                `/products`,
                values,
            );
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
