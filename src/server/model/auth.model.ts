import type { z } from "zod";
import type {
  loginSchema,
  registerSchema,
} from "../validation-schema/auth.validation";

export type RegisterRequest = z.infer<typeof registerSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;
