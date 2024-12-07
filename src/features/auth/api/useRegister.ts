import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { type RegisterFormSchema } from '../types';
import type { ApiProps, ApiResponse } from '@/types/client/api';

export const useRegister = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async (values: RegisterFormSchema) => {
            const response = await axiosInstance.post<
                ApiResponse<RegisterFormSchema>
            >('/auth/register', values);

            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
