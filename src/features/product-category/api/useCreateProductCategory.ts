import { axiosAuth } from '@/lib/axios';
import type { ApiProps, ApiResponse } from '@/types/api';
import { useMutation } from '@tanstack/react-query';
import type { CreateProductCategoryFormSchema } from '../types';

export const useCreateProductCategory = ({ onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['product-categories'],
        mutationFn: async (values: CreateProductCategoryFormSchema) => {
            const response = await axiosAuth.post<
                ApiResponse<CreateProductCategoryFormSchema>
            >('/product-categories', values);
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};
