import { useQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

type UseUsersProps = {
    id?: string;
    token?: string;
    onSuccess?: () => void;
    onError?: (error: AxiosError) => void;
};

export const useUsers = ({ id, token }: UseUsersProps) => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = null;
            return response;
        },
    });
};
