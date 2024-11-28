import { type RegisterRequest } from "@/server/model/auth.model";
import { type UserModel } from "@/server/model/user.model";
import { type WebModel } from "@/server/model/web.model";
import { NextResponse, type NextRequest } from "next/server";
import { register } from "./auth.service";
import { ErrorFilter } from "@/server/filter/error.filter";

export const handlers = {
    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<WebModel<UserModel>>> => {
        try {
            const user = (await request.json()) as RegisterRequest;

            const data = await register(user);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: `Success register new user`,
                    data,
                },
                { status: 201 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
