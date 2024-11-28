import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { type LoginFormSchema } from "../types";

export const useLogin = ({
    onSettled,
    onError
}: {
    onSettled?: () => void,
    onError?: (error: string) => void
}) => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: async (values: LoginFormSchema & { callbackUrl: string }) => {
            const response = await signIn('credentials', {
                redirect: false,
                ...values,
            });

            if (response?.error) {
                throw new Error('Invalid email or password');
            }

            return response;
        },
        onSuccess: () => {
            onSettled?.();
        },
        onError: (error: Error) => {
            onError?.(error.message);
        }
    });
}