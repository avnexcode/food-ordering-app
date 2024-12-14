import { useAuth } from '@/features/auth/api/useAuth';
import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import type { StoreWithRelations } from '../types';

export const useStore = () => {
    const { data: user } = useAuth();
    console.log(user);
    return useQuery({
        queryKey: ['store'],
        queryFn: async () => {
            const response = await axiosAuth.get<
                ApiResponse<StoreWithRelations>
            >(`/stores/${user?.store_id}`);
            return response.data.data;
        },
    });
};
