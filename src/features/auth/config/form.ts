import type { LoginFormSchema, RegisterFormSchema } from "@/features/auth/types";
import { type FormField } from "@/types/form";

export const registerFormFields: FormField<RegisterFormSchema>[] = [
    {
        type: "text",
        name: "name",
        label: "Full Name",
        placeholder: "Enter your full name",
    },
    {
        type: "email",
        name: "email",
        label: "Email Address",
        placeholder: "Enter your email",
    },
    {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
    },
    {
        type: "password",
        name: "confirm_password",
        label: "Confirm Password",
        placeholder: "Confirm your password",
    },
];

export const loginFormFields: FormField<LoginFormSchema>[] = [
    {
        type: "email",
        name: "email",
        label: "Email Address",
        placeholder: "Enter your email",
    },
    {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
    },
];
