import { axiosAuth } from '@/lib/axios';
import type { ApiProps, ApiResponse } from '@/types/api';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useDeleteProductCategory = ({
    id,
    onSuccess,
    onError,
}: { id?: string } & ApiProps) => {
    return useMutation({
        mutationKey: ['product-categories'],
        mutationFn: async () => {
            if (!id) throw new AxiosError('Id is required');
            const response = await axiosAuth.delete<
                ApiResponse<{ id: string }>
            >(`/product-categories/${id}`);
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
