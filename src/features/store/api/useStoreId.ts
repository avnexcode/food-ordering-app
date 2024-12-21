import { axiosAuth } from '@/lib/axios';
import type { ApiResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
import type { StoreWithRelations } from '../types';

export const useStoreId = (id?: string) => {
    return useQuery({
        queryKey: ['stores'],
        queryFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.get<
                ApiResponse<StoreWithRelations>
            >(`/stores/${id}`);
            return response.data.data;
        },
    });
};
