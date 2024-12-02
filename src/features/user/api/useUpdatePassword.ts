import { useMutation } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

type UseUpdatePasswordProps = {
    id?: string;
    token?: string;
    onSuccess?: () => void;
    onError?: (error: AxiosError) => void;
};

export const useUpdatePassword = ({ id, token }: UseUpdatePasswordProps) => {
    return useMutation({
        mutationKey: ['users'],
        mutationFn: async () => {
            const response = null;
            return response;
        },
    });
};
