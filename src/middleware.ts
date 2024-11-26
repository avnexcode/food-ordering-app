import { type NextRequest, NextResponse } from "next/server";
import { ErrorFilter } from "./server/filter/error.filter";

export async function middleware(request: NextRequest) {
    try {
        console.log('From Middleware')
        return NextResponse.next();
    } catch (error) {
        return ErrorFilter.catch(error);
    }
}