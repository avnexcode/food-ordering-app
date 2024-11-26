import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { type RegisterFormSchema } from "../types";

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
        onError: (error: Error) => {
            onError?.(error.message);
        },
    });
};
