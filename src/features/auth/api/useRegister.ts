import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { type RegisterFormSchema } from "../types";
import { type AxiosError } from "axios";

interface ErrorResponse {
    message: string;
    // Add other error response fields f-rom your API
    statusCode?: number;
    error?: string;
}

export const useRegister = ({
    onSettled,
    onError,
}: {
    onSettled?: () => void;
    onError?: (error: string) => void;
}) => {
    return useMutation({
        mutationKey: ["register"],
        mutationFn: async (values: RegisterFormSchema) => {
            const response = await axiosInstance.post<RegisterFormSchema>(
                "/auth/register",
                values,
            );

            return response.data;
        },
        onSuccess: () => {
            onSettled?.();
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            console.log(error)
            // Get error message from response data
            const errorMessage = error.response?.data?.error ?? error.message;
            onError?.(errorMessage);
        },
    });
};