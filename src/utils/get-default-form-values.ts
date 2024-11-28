import { type FormField } from "@/types/form";
import { type FieldValues } from "react-hook-form";

export const getDefaultFormValues = <T extends FieldValues>(formFields: FormField<T>[]) => {
  const defaultValues = formFields.reduce(
    (acc, field) => {
      acc[field.name] = "";
      return acc;
    },
    {} as Partial<Record<keyof T, string>>,
  );

  return defaultValues as T;
};
