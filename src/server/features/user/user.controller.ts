import { type NextRequest, NextResponse } from 'next/server';
import { userService } from './user.service';
import { type WebModel } from '@/server/model/web.model';
import { ErrorFilter } from '@/server/filter/error.filter';
import { NotFoundException } from '@/server/lib/error.exception';
import type {
    SafeUserWithRelations,
    UpdateUserRequest,
    UserResponse,
} from './user.model';
import { headers } from 'next/headers';
import {
    createMessageDeleteSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePutSuccess,
} from '@/server/helper';

export const handlers = {
    GET: async (): Promise<NextResponse<WebModel<SafeUserWithRelations[]>>> => {
        try {
            const headersList = await headers();
            const userId = headersList.get('x-user-id');

            const data = await userService.getAll();

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageGetSuccess('Users'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_ID: async (
        req: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<SafeUserWithRelations>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await userService.getById(id);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageGetUniqueSuccess(
                        'User',
                        `id : ${id}`,
                    ),
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
                    user.phone &&
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
                    message: createMessagePutSuccess('User'),
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

            const requestBody = (await req.json()) as UpdateUserRequest;

            const data = await userService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('User'),
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
                    statusCode: 204,
                    message: createMessageDeleteSuccess('User'),
                    data,
                },
                { status: 204 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
