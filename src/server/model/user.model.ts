import { type UserRole } from "@prisma/client";
import type { z } from "zod";
import type { updateUserSchema } from "../validation-schema/user.validation";

export interface UserModel {
  id?: string;
  username: string;
  name: string;
  email: string;
  role: UserRole;
  provider?: string
}

export type UpdateUserRequest = z.infer<typeof updateUserSchema>