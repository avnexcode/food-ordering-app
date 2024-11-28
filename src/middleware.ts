import { type NextRequest, NextResponse } from "next/server";
import { withAuth } from "./middleware/withAuth";

const middleware = async (request: NextRequest) => {
    return NextResponse.next();
}

const middlewareHandler = withAuth(middleware, ['/dashboard', '/profile'])

export default middlewareHandler

export const config = {
    matcher: [
        "/:path*",
    ]
}; 