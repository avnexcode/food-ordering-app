import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import type { UpdateProfileSchema } from '../types';
import { axiosAuth } from '@/lib/axios';
import type { ApiProps } from '@/types/client/api';

export const useUpdateProfile = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['users'],

        mutationFn: async ({
            id,
            values,
        }: {
            id?: string;
            values: UpdateProfileSchema;
        }) => {
            if (!id) throw new AxiosError('ID and token are required');

            const response = await axiosAuth.patch(`/users/${id}`, values);

            return response;
        },
        onSuccess,
        onError,
    });
};
