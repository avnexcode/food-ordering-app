import { type NextRequest, NextResponse } from 'next/server';
import { userService } from './user.service';
import { type WebModel } from '@/server/model/web.model';
import { ErrorFilter } from '@/server/filter/error.filter';
import { NotFoundException } from '@/server/lib/error.exception';
import type { UpdateUserRequest, UserResponse } from './user.model';
import { headers } from 'next/headers';

export const handlers = {
    GET: async (
        req: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<UserResponse | UserResponse[]>>> => {
        try {
            const headersList = await headers();
            const userId = headersList.get('x-user-id');
            console.log({ userId });
            const params = await context.params;
            const id = params?.id;

            const data = id
                ? await userService.getById(id)
                : await userService.getAll();

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: id
                        ? `Success retrieving user data by ID`
                        : `Success retrieving all users data`,
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PUT: async (
        req: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<UserResponse>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const user = (await req.json()) as UpdateUserRequest;

            if (
                !(
                    user.username &&
                    user.email &&
                    user.name &&
                    user.password &&
                    user.role
                )
            ) {
                throw new NotFoundException(`Some fields are missing`);
            }

            const data = await userService.update(id, user);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: `User data successfully updated`,
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PATCH: async (
        req: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<UserResponse>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const user = (await req.json()) as UpdateUserRequest;

            const data = await userService.update(id, user);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: `User data successfully patched`,
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    DELETE: async (
        req: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<{ id: string }>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await userService.delete(id);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: `User data successfully deleted`,
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
