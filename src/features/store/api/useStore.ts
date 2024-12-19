import { useAuth } from '@/features/auth/api/useAuth';
import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import type { StoreWithRelations } from '../types';

export const useStore = () => {
    const { data: user } = useAuth();
    return useQuery({
        queryKey: ['store', user?.store_id],
        queryFn: async () => {
            const response = await axiosAuth.get<
                ApiResponse<StoreWithRelations>
            >(`/stores/${user?.store_id}`);
            return response.data.data;
        },
        enabled: !!user?.store_id,
        retry: false,
    });
};
