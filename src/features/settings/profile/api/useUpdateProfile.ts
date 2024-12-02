import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

interface UpdateProfileData {
    username?: string;
    name?: string;
    email?: string;
}

type UseUpdateProfileProps = {
    id?: string;
    token?: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
};

export const useUpdateProfile = ({
    id,
    token,
    onSuccess,
    onError,
}: UseUpdateProfileProps) => {
    return useMutation({
        // This clearly indicates:
        // 1. The resource type (users)
        // 2. The specific user (id)
        // 3. The action context (profile)
        mutationKey: ['users', id, 'profile'],

        mutationFn: async (data: UpdateProfileData) => {
            if (!id || !token) {
                throw new Error('ID and token are required');
            }

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
