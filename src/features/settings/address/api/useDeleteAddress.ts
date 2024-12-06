import { useMutation } from '@tanstack/react-query';
import type { ApiProps, ApiResponse } from '@/types/client/api';
import { axiosAuth } from '@/lib/axios';

export const useDeleteAddress = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['addresses'],
        mutationFn: async (id?: string) => {
            if (!id) throw new Error('Tidak ada id');
            const response = await axiosAuth.delete<
                ApiResponse<{ number: string }>
            >(`/addresses/${id}`);

            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
