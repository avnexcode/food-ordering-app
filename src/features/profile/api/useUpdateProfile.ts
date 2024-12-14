import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import type { UpdateProfileSchema } from '../types';
import { axiosAuth } from '@/lib/axios';
import type { ApiProps, ApiResponse } from '@/types/api';
import { type User } from '@prisma/client';

export const useUpdateProfile = ({
    id,
    onSuccess,
    onError,
}: { id?: string } & ApiProps) => {
    return useMutation({
        mutationKey: ['users', id],
        mutationFn: async (values: UpdateProfileSchema) => {
            if (!id) throw new AxiosError('Id is required');
            const response = await axiosAuth.patch<ApiResponse<User>>(
                `/users/${id}`,
                values,
            );
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
