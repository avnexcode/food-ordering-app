import { axiosAuth } from '@/lib/axios';
import type { ApiProps } from '@/types/client/api';
import { useMutation } from '@tanstack/react-query';
import type { UpdatePasswordSchema } from '../types';

export const useUpdatePassword = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['users', 'password'],

        mutationFn: async ({
            id,
            values,
        }: {
            id?: string;
            values: UpdatePasswordSchema;
        }) => {
            if (!id) throw new Error('TIdak ada id');
            const response = await axiosAuth.patch(
                `/users/reset-password/${id}`,
                values,
            );
            return response;
        },
        onSuccess,
        onError,
    });
};
