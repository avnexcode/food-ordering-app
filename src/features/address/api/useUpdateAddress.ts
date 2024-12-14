import { useMutation } from '@tanstack/react-query';
import { type Address } from '@prisma/client';
import type { UpdateAddressFormSchema } from '../types';
import type { ApiProps, ApiResponse } from '@/types/api';
import { axiosAuth } from '@/lib/axios';

export const useUpdateAddress = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['addresses'],
        mutationFn: async ({
            id,
            values,
        }: {
            id?: string;
            values: UpdateAddressFormSchema;
        }) => {
            if (!id) throw new Error('TIdak ada id');
            const response = await axiosAuth.put<ApiResponse<Address>>(
                `/addresses/${id}`,
                values,
            );
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
