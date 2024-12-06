import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import { addressService } from './address.service';
import type {
    AddressWithRelations,
    CreateAddressRequest,
    UpdateAddressRequest,
} from './address.model';
import { NotFoundException } from '@/server/lib/error.exception';
import type { WebModel } from '@/server/model/web.model';
import type { Address } from '@prisma/client';
import {
    createMessageDeleteSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePostSuccess,
    createMessagePutSuccess,
} from '@/server/helper';
import { headers } from 'next/headers';

export const handlers = {
    GET: async (): Promise<NextResponse<WebModel<AddressWithRelations[]>>> => {
        try {
            const headerList = await headers();
            const userId = headerList.get('x-user-id');

            const data = await addressService.getAll(userId!);

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetSuccess('Addresses'),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<AddressWithRelations>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = await addressService.getById(id);

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: createMessageGetUniqueSuccess('Address', `id : ${id}`),
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<WebModel<Address>>> => {
        try {
            const headersList = await headers();
            const userId = headersList.get('x-user-id');

            const requestBody = (await request.json()) as CreateAddressRequest;

            const data = await addressService.create(requestBody, userId!);

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
    ): Promise<NextResponse<WebModel<Address>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateAddressRequest;

            if (
                !(
                    requestBody.country &&
                    requestBody.description &&
                    requestBody.postal_code &&
                    requestBody.street
                )
            ) {
                throw new NotFoundException(
                    'All fields are required for PUT request',
                );
            }

            const data = await addressService.update(id, requestBody);

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
    ): Promise<NextResponse<WebModel<Address>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const requestBody = (await request.json()) as UpdateAddressRequest;

            const data = await addressService.update(id, requestBody);

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
            const data = await addressService.delete(id);

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
