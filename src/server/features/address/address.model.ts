import { type z } from "zod";
import type {
    updateAddressSchema,
    createAddressSchema,
} from "./address.validation";

export type CreateAddressRequest = z.infer<typeof createAddressSchema>;
export type UpdateAddressRequest = z.infer<typeof updateAddressSchema>;
