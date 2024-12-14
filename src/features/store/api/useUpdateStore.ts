import { useMutation } from "@tanstack/react-query";
import { type UpdateStoreFormSchema } from "../types";
import { axiosAuth } from "@/lib/axios";
import { type ApiProps, type ApiResponse } from "@/types/api";

export const useUpdateStore = ({
    id,
    onSuccess,
    onError,
}: { id?: string } & ApiProps) => {
    return useMutation({
        mutationKey: ['stores'],
        mutationFn: async (values: UpdateStoreFormSchema) => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.put<ApiResponse<UpdateStoreFormSchema>>(
                `/stores/${id}`,
                values,
            );
            return response.data.data;
        },
        onSuccess,
        onError,
    });
};