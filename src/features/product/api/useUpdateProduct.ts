import type { ApiProps, ApiResponse } from '@/types/client/api';
import { useMutation } from '@tanstack/react-query';
import type { UpdateProductFormSchema } from '../types';
import { type Product } from '@prisma/client';
import { axiosAuth } from '@/lib/axios';

export const useUpdateProduct = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['products'],
        mutationFn: async ({
            id,
            values,
        }: {
            id?: string;
            values: UpdateProductFormSchema;
        }) => {
            if (!id) throw new Error('Tidak ada id');
            const response = await axiosAuth.put<ApiResponse<Product>>(
                `/products/${id}`,
                values,
            );
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
