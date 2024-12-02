import { useQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

type UseUserByIdProps = {
    id?: string;
    token?: string;
    onSuccess?: () => void;
    onError?: (error: AxiosError) => void;
};

export const useUserById = ({ id, token }: UseUserByIdProps) => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = null;
            return response;
        },
    });
};
