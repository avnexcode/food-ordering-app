import { type WebModel } from '@/server/model/web.model';
import { NextResponse, type NextRequest } from 'next/server';
import { ErrorFilter } from '@/server/filter/error.filter';
import type { UserModel } from '../user/user.model';
import type { RegisterRequest } from './auth.model';
import { authService } from './auth.service';

export const handlers = {
    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<WebModel<UserModel>>> => {
        try {
            const requestBody = (await request.json()) as RegisterRequest;

            const data = await authService.register(requestBody);

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
