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
import { type Regency } from '@prisma/client';
import { regencyService } from './regency.service';
import type {
    CreateRegencyRequest,
    RegencyWithRelations,
    UpdateRegencyRequest,
} from './regency.model';
import { NotFoundException } from '@/server/lib/error.exception';

export const handlers = {
    GET: async (): Promise<NextResponse<WebModel<RegencyWithRelations[]>>> => {
        try {
            const data = await regencyService.getAll();

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetSuccess('Regencies'),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<RegencyWithRelations>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = await regencyService.getById(Number(id));

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetUniqueSuccess('Regency', `id : ${id}`),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<WebModel<Regency>>> => {
        try {
            const requestBody = (await request.json()) as CreateRegencyRequest;

            const data = await regencyService.create({
                ...requestBody,
                id: Number(requestBody.id),
            });

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: createMessagePostSuccess('Regency'),
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
    ): Promise<NextResponse<WebModel<Regency>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateRegencyRequest;

            if (
                !(
                    requestBody.name &&
                    requestBody.alt_name &&
                    requestBody.latitude &&
                    requestBody.longitude &&
                    requestBody.province_id
                )
            ) {
                throw new NotFoundException('Some fields are missing');
            }

            const data = await regencyService.update(Number(id), requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePutSuccess('Regency'),
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
    ): Promise<NextResponse<WebModel<Regency>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateRegencyRequest;

            const data = await regencyService.update(Number(id), requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Regency'),
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

            const data = await regencyService.delete(Number(id));

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 204,
                    message: createMessageDeleteSuccess('Regency'),
                    data,
                },
                { status: 204 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
