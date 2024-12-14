import { axiosAuth } from '@/lib/axios';
import type { ApiProps, ApiResponse } from '@/types/api';
import { useMutation } from '@tanstack/react-query';
import type { CreateStoreFormSchema } from '../types';

export const useCreateStore = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['stores'],
        mutationFn: async (values: CreateStoreFormSchema) => {
            const response = await axiosAuth.post<
                ApiResponse<CreateStoreFormSchema>
            >('/stores', values);

            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
