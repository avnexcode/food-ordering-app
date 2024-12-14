import { useAxiosAuth } from '@/hooks/use-axios-auth';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import type { ApiResponse } from '@/types/api';
import { type User } from '@prisma/client';

export const useAuth = () => {
    const { data: session, status } = useSession();
    const axiosAuth = useAxiosAuth();

    return useQuery({
        queryKey: ['users', session?.user.id, 'profile'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<User>>(
                `/users/${session?.user.id}`,
            );
            return response.data.data;
        },
        enabled: status === 'authenticated' && !!session?.user.id,
    });
};
