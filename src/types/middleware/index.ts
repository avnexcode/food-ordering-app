import { type NextFetchEvent, type NextMiddleware, type NextRequest } from "next/server";

export type MiddlewareFactory = (middleware: NextMiddleware, requireAuth?: string[]) => NextMiddleware;