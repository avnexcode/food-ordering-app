import type { ApiProps, ApiResponse } from '@/types/api';
import { useMutation } from '@tanstack/react-query';
import type { UpdateProductFormSchema } from '../types';
import { type Product } from '@prisma/client';
import { axiosAuth } from '@/lib/axios';

export const useUpdateProduct = ({
    id,
    onSuccess,
    onError,
}: { id?: string } & ApiProps) => {
    return useMutation({
        mutationKey: ['products'],
        mutationFn: async (values: UpdateProductFormSchema) => {
            if (!id) throw new Error('Tidak ada id');
            const response = await axiosAuth.patch<ApiResponse<Product>>(
                `/products/${id}`,
                values,
            );
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
