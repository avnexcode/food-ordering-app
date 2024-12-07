import { useAxiosAuth } from '@/hooks/use-axios-auth';
import type { ApiResponse } from '@/types/client/api';
import { type User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export const useProfile = () => {
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
