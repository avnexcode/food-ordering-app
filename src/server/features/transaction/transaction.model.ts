import { type Prisma } from "@prisma/client";
import { z } from "zod";
import type { createTransactionRequest } from "./transaction.validation";

export type CreateTransactionRequest = z.infer<typeof createTransactionRequest>
export type TransactionWithRelations = Prisma.TransactionGetPayload<{
    include: {
        store: true;
        tran: true;
    };
}>;