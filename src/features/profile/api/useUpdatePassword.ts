import { axiosAuth } from '@/lib/axios';
import type { ApiProps } from '@/types/client/api';
import { useMutation } from '@tanstack/react-query';
import type { UpdatePasswordSchema } from '../types';

export const useUpdatePassword = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        // This clearly indicates:
        // 1. The resource type (users)
        // 2. The specific user (id)
        // 3. The specific field being updated (password)
        mutationKey: ['users'],

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
