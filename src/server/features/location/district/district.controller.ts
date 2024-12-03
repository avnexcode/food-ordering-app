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
import { type District } from '@prisma/client';
import { districtService } from './district.service';
import { CreateDistrictRequest, UpdateDistrictRequest } from './district.model';
import { NotFoundException } from '@/server/lib/error.exception';

export const handlers = {
    GET: async (): Promise<NextResponse<WebModel<District[]>>> => {
        try {
            const data = await districtService.getAll();

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetSuccess('Districts'),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<District>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = await districtService.getById(Number(id));

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetUniqueSuccess(
                    'District',
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
    ): Promise<NextResponse<WebModel<District>>> => {
        try {
            const requestBody = (await request.json()) as CreateDistrictRequest;
            const data = await districtService.create(requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: createMessagePostSuccess('District'),
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
    ): Promise<NextResponse<WebModel<District>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateDistrictRequest;

            if (
                !(
                    requestBody.name &&
                    requestBody.alt_name &&
                    requestBody.latitude &&
                    requestBody.longitude &&
                    requestBody.regency_id
                )
            ) {
                throw new NotFoundException('Some fields are missing');
            }

            const data = await districtService.update(Number(id), requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePutSuccess('District'),
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
    ): Promise<NextResponse<WebModel<District>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateDistrictRequest;

            const data = await districtService.update(Number(id), requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('District'),
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

            const data = await districtService.delete(Number(id));

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 204,
                    message: createMessageDeleteSuccess('District'),
                    data,
                },
                { status: 204 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
