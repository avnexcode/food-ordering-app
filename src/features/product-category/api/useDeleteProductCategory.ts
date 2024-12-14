import { axiosAuth } from '@/lib/axios';
import type { ApiProps, ApiResponse } from '@/types/api';
import { useMutation } from '@tanstack/react-query';

export const useDeleteProductCategory = ({
    id,
    onSuccess,
    onError,
}: { id?: string } & ApiProps) => {
    return useMutation({
        mutationKey: ['product-categories'],
        mutationFn: async () => {
            if (!id) throw new Error('Tidak ada id');
            const response = await axiosAuth.delete<
                ApiResponse<{ id: string }>
            >(`/product-categories/${id}`);
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
