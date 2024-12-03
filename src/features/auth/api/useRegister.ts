import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { type RegisterFormSchema } from '../types';
import { type AxiosError } from 'axios';

type UseRegisterProps = {
    onSuccess?: () => void;
    onError?: (error: AxiosError) => void;
};

export const useRegister = ({ onSuccess, onError }: UseRegisterProps) => {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async (values: RegisterFormSchema) => {
            const response = await axiosInstance.post<RegisterFormSchema>(
                '/auth/register',
                values,
            );

            return response.data;
        },
        onSuccess,
        onError,
    });
};
