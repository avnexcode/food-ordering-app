import { type DefaultSession } from "next-auth";
import { type Role } from "@prisma/client";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            role: Role;
        } & DefaultSession["user"];
    }

    interface User extends DefaultSession.user {
        role: Role;
    }

    interface JWT {
        role: Role;
    }
}