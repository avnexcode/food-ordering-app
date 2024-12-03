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
import { type Village } from '@prisma/client';
import { villageService } from './village.service';
import type {
    CreateVillageRequest,
    UpdateVillageRequest,
} from './village.model';
import { NotFoundException } from '@/server/lib/error.exception';

export const handlers = {
    GET: async (): Promise<NextResponse<WebModel<Village[]>>> => {
        try {
            const data = await villageService.getAll();

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetSuccess('Villages'),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<Village>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = await villageService.getById(Number(id));

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetUniqueSuccess('Village', `id : ${id}`),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<WebModel<Village>>> => {
        try {
            const requestBody = (await request.json()) as CreateVillageRequest;
            const data = await villageService.create(requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: createMessagePostSuccess('Village'),
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
    ): Promise<NextResponse<WebModel<Village>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const requestBody = (await request.json()) as UpdateVillageRequest;

            if (
                !(
                    requestBody.name &&
                    requestBody.alt_name &&
                    requestBody.latitude &&
                    requestBody.longitude &&
                    requestBody.district_id
                )
            ) {
                throw new NotFoundException('Some fields are missing');
            }

            const data = await villageService.update(Number(id), requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePutSuccess('Village'),
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
    ): Promise<NextResponse<WebModel<Village>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const requestBody = (await request.json()) as UpdateVillageRequest;

            const data = await villageService.update(Number(id), requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Village'),
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
    ): Promise<NextResponse<WebModel<{ id: number }>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await villageService.delete(Number(id));

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 204,
                    message: createMessageDeleteSuccess('Village'),
                    data,
                },
                { status: 204 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
