import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import type { WebModel } from '@/server/model/web.model';
import {
    createMessageDeleteSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePostSuccess,
    createMessagePutSuccess,
} from '@/server/helper';

export const handlers = {
    GET: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<string>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = '';

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: id
                    ? createMessageGetUniqueSuccess('Address', `id : ${id}`)
                    : createMessageGetSuccess('Addresses'),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<WebModel<string>>> => {
        try {
            const data = '';

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: createMessagePostSuccess('Address'),
                    data,
                },
                { status: 201 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PUT: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<string>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = '';

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePutSuccess('Address'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PATCH: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<string>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = '';

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Address'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    DELETE: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<{ id: string }>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 204,
                    message: createMessageDeleteSuccess('Address'),
                    data: { id },
                },
                { status: 204 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
