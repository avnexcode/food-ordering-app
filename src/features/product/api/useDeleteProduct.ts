import { axiosAuth } from '@/lib/axios';
import type { ApiProps, ApiResponse } from '@/types/api';
import { useMutation } from '@tanstack/react-query';

export const useDeleteProduct = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['products'],
        mutationFn: async (id?: string) => {
            if (!id) throw new Error('Tidak ada id');

            const response = await axiosAuth.delete<
                ApiResponse<{ id: string }>
            >(`/products/${id}`);

            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
