import { axiosAuth } from '@/lib/axios';
import type { ApiProps, ApiResponse } from '@/types/api';
import { type User } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';

export const useUpdateUser = ({
    id,
    onSuccess,
    onError,
}: { id?: string } & ApiProps) => {
    return useMutation({
        mutationKey: ['users', id],
        mutationFn: async values => {
            if (!id) throw new Error('Id is required');
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
