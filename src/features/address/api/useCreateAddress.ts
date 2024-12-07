import { useMutation } from '@tanstack/react-query';
import type { CreateAddressFormSchema } from '../types';
import type { ApiProps, ApiResponse } from '@/types/client/api';
import { type Address } from '@prisma/client';
import { axiosAuth } from '@/lib/axios';

export const useCreateAddress = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['addresses'],
        mutationFn: async (values: CreateAddressFormSchema) => {
            const response = await axiosAuth.post<ApiResponse<Address>>(
                '/addresses',
                values,
            );
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
