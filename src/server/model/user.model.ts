import { type Role } from "@prisma/client";
import type { z } from "zod";
import type { updateUserSchema } from "../validation-schema/user.validation";

export interface UserModel {
  id?: string;
  username: string;
  name: string;
  email: string;
  role: Role;
}

export type UpdateUserRequest = z.infer<typeof updateUserSchema>