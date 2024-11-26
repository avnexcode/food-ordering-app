import React from "react";
import { RenderElements } from "@/utils";
import { Form } from "@/components/ui/form";
import type { UseFormReturn, FieldValues } from "react-hook-form";
import { InputField } from "@/components/element/InputField";
import { type FormField } from "@/types/form";

type FormInnerProps<T extends FieldValues> = {
    form_id: string;
    form: UseFormReturn<T>;
    onSubmit: (values: T) => void;
    formFields: Array<FormField<T>>;
};

export const FormInner = <T extends FieldValues>(props: FormInnerProps<T>) => {
    const { form_id, form, onSubmit, formFields, } = props

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} id={form_id} className="space-y-4 w-full">
                <RenderElements of={formFields} render={(input) => (<InputField key={input.name} input={input} form={form} />)} />
            </form>
        </Form>
    );
};
