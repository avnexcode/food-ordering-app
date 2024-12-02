import { axiosInstance } from '@/lib/axios';
import type { UserRole } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

type ApiResponse<T> = {
    status: boolean;
    statusCode: number;
    message: string;
    data: T;
};

type UserData = {
    id: string;
    username: string;
    name: string;
    email: string;
    role: UserRole;
    store: null;
    addresses: [];
    token: string;
};

export const useUserById = (id?: string, token?: string) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: async (): Promise<UserData> => {
            if (!id || !token) {
                throw new Error('ID and token are required');
            }

            const response = await axiosInstance.get<ApiResponse<UserData>>(
                `/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            if (!response.data.status) {
                throw new Error(response.data.message);
            }
            console.log(response);

            return response.data.data;
        },
    });
};
