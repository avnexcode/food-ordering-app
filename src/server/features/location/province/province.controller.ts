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
import { provinceService } from './province.service';
import { type Province } from '@prisma/client';
import type {
    CreateProvinceRequest,
    UpdateProvinceRequest,
} from './province.model';
import { NotFoundException } from '@/server/lib/error.exception';

export const handlers = {
    GET: async (): Promise<NextResponse<WebModel<Province[]>>> => {
        try {
            const data = await provinceService.getAll();

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetSuccess('Provincees'),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<Province>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await provinceService.getById(Number(id));

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetUniqueSuccess(
                    'Province',
                    `id : ${id}`,
                ),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<WebModel<Province>>> => {
        try {
            const requestBody = (await request.json()) as CreateProvinceRequest;

            const data = await provinceService.create({
                ...requestBody,
                id: Number(requestBody.id),
            });

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: createMessagePostSuccess('Province'),
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
    ): Promise<NextResponse<WebModel<Province>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateProvinceRequest;

            if (
                !(
                    requestBody.name &&
                    requestBody.alt_name &&
                    requestBody.latitude &&
                    requestBody.longitude
                )
            ) {
                throw new NotFoundException('Missing some fields');
            }

            const data = await provinceService.update(Number(id), requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePutSuccess('Province'),
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
    ): Promise<NextResponse<WebModel<Province>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateProvinceRequest;

            const data = await provinceService.update(Number(id), requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Province'),
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

            const data = await provinceService.delete(Number(id));

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageDeleteSuccess('Address'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
