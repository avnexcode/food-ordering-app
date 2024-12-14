import { axiosAuth } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import type { ApiProps } from '@/types/api';
import type { UpdatePasswordSchema } from '../types';

export const useUpdatePassword = ({
    id,
    onSuccess,
    onError,
}: { id?: string } & ApiProps) => {
    return useMutation({
        mutationKey: ['users', id, 'password'],
        mutationFn: async (values: UpdatePasswordSchema) => {
            if (!id) throw new AxiosError('Id is required');
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
