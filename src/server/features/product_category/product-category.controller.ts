import { ErrorFilter } from "@/server/filter/error.filter";
import { NextResponse, type NextRequest } from "next/server";

export const handlers = {
    GET: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> }
    ) => {
        try {
            const params = await context.params
            const id = params?.id
            return NextResponse.json({ message: "Hello" })
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    POST: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> }
    ) => {
        try {
            const params = await context.params
            const id = params?.id
            return NextResponse.json({ message: "Hello" })
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    PUT: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> }
    ) => {
        try {
            const params = await context.params
            const id = params?.id
            return NextResponse.json({ message: "Hello" })
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    PATCH: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> }
    ) => {
        try {
            const params = await context.params
            const id = params?.id
            return NextResponse.json({ message: "Hello" })
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    DELETE: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> }
    ) => {
        try {
            const params = await context.params
            const id = params?.id
            return NextResponse.json({ message: "Hello" })
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
}