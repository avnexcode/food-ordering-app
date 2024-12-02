import { axiosInstance } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

type UseCreateStoreProps = {
    token?: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
};

export const useCreateStore = ({
    token,
    onSuccess,
    onError,
}: UseCreateStoreProps) => {
    return useMutation({
        mutationKey: ['stores', token],
        mutationFn: async (values: { name: string }) => {
            const response = await axiosInstance.post<{ name: string }>(
                '/stores',
                values,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            return response.data;
        },
        onSuccess,
        onError,
    });
};
