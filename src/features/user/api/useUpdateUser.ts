import { axiosInstance } from '@/lib/axios';
import { type UserRole } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

type UseUpdateUserProps = {
    id?: string;
    token?: string;
    onSuccess?: () => void;
    onError?: (error: AxiosError) => void;
};

export const useUpdateUser = ({
    id,
    token,
    onSuccess,
    onError,
}: UseUpdateUserProps) => {
    return useMutation({
        mutationKey: ['users'],
        mutationFn: async (values: { role: UserRole }) => {
            const response = await axiosInstance.patch(`/users/${id}`, values, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        },
        onSuccess,
        onError,
    });
};
