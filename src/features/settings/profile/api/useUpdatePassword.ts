import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

interface UpdatePasswordData {
    password: string;
    new_password: string;
}

type UseUpdatePasswordProps = {
    id?: string;
    token?: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
};

export const useUpdatePassword = ({
    id,
    token,
    onSuccess,
    onError,
}: UseUpdatePasswordProps) => {
    return useMutation({
        // This clearly indicates:
        // 1. The resource type (users)
        // 2. The specific user (id)
        // 3. The specific field being updated (password)
        mutationKey: ['users', id, 'password'],

        mutationFn: async (data: UpdatePasswordData) => {
            const response = await axiosInstance.patch(`/users/${id}`, data, {
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
