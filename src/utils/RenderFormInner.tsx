import React from 'react';
import { renderElements } from '@/utils';
import { Form } from '@/components/ui/form';
import type { UseFormReturn, FieldValues } from 'react-hook-form';
import { InputField } from '@/components/element/InputField';
import { type FormField } from '@/types/form';

type RenderFormFieldsProps<T extends FieldValues> = {
    form_id: string;
    form: UseFormReturn<T>;
    onSubmit: (values: T) => void;
    formFields: Array<FormField<T>>;
    className?: string;
};

export const RenderFormFields = <T extends FieldValues>(
    props: RenderFormFieldsProps<T>,
) => {
    const { form_id, form, onSubmit, formFields, className } = props;

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                id={form_id}
                className={`space-y-4 w-full ${className}`}
            >
                {renderElements({
                    of: formFields,
                    render: input => (
                        <InputField
                            key={input.name}
                            input={input}
                            form={form}
                        />
                    ),
                })}
            </form>
        </Form>
    );
};
