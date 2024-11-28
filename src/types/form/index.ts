import type { FieldValues, Path } from "react-hook-form";

export type FormField<T extends FieldValues> = {
  name: Path<T>;
  type: string;
  label: string;
  placeholder: string;
};


// export type FormField<T> = {
//   name: keyof T;
//   type: string;
//   label?: string;
//   placeholder?: string
// };
