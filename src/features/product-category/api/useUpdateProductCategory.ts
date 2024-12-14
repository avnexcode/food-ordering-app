import { ApiProps, ApiResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import { UpdateProductCategoryFormSchema } from "../types";
import { AxiosError } from "axios";
import { axiosAuth } from "@/lib/axios";
import { ProductCategory } from "@prisma/client";

export const useUpdateProductCategory = ({id, onSuccess, onError}: {id?: string}& ApiProps) => {

    return useMutation({
        mutationKey: ['product-categories', id],
        mutationFn: async (values: UpdateProductCategoryFormSchema) => {
            if(!id) throw new AxiosError('Id is required');
            const response = await axiosAuth.patch<ApiResponse<ProductCategory>>(`/product-categories/${id}`, values);
            return response.data.data;
        } 
        ,onSuccess, onError
    })

};

