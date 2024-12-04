import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import { storeService } from './store.service';
import type {
    CreateStoreRequest,
    StoreWithRelations,
    UpdateStoreRequest,
} from './store.model';
import { NotFoundException } from '@/server/lib/error.exception';
import type { WebModel } from '@/server/model/web.model';
import type { Store } from '@prisma/client';
import {
    createMessageDeleteSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePostSuccess,
    createMessagePutSuccess,
} from '@/server/helper';

export const handlers = {
    GET: async (): Promise<NextResponse<WebModel<StoreWithRelations[]>>> => {
        try {
            const data = await storeService.getAll();

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageGetSuccess('Stores'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<StoreWithRelations>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await storeService.getById(id);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageGetUniqueSuccess(
                        'Store',
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
    POST: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<Store>>> => {
        try {
            const requestBody = (await request.json()) as CreateStoreRequest;

            const data = await storeService.create(requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: createMessagePostSuccess('Store'),
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
    ): Promise<NextResponse<WebModel<Store>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateStoreRequest;

            if (!requestBody.name) {
                throw new NotFoundException('Some fields are missing');
            }

            const data = await storeService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePutSuccess('Store'),
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
    ): Promise<NextResponse<WebModel<Store>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateStoreRequest;

            const data = await storeService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Store'),
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
            const data = await storeService.delete(id);
            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageDeleteSuccess('Store'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
