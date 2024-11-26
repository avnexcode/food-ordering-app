type FormField<T> = {
  name: keyof T;
  type: string;
};
export const getDefaultFormValues = <T>(formFields: FormField<T>[]) => {
  const defaultValues = formFields.reduce(
    (acc, field) => {
      acc[field.name] = "";
      return acc;
    },
    {} as Partial<Record<keyof T, string>>,
  );

  return defaultValues as T;
};
