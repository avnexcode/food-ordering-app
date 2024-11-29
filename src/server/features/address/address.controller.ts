import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import { addressService } from './address.service';
import type {
    CreateAddressRequest,
    UpdateAddressRequest,
} from './address.model';
import { NotFoundException } from '@/server/lib/error.exception';

export const handlers = {
    GET: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ) => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = id
                ? await addressService.getById(id)
                : await addressService.getAll();

            return NextResponse.json({
                status: true,
                statusCode: 200,
                message: 'Success',
                data,
            });
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    POST: async (request: NextRequest) => {
        try {
            const requestBody = (await request.json()) as CreateAddressRequest;
            const data = await addressService.create(requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: 'Success',
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
    ) => {
        try {
            const params = await context.params;
            const id = params?.id;
            const requestBody = (await request.json()) as UpdateAddressRequest;

            if (
                !(
                    requestBody.city &&
                    requestBody.country &&
                    requestBody.description &&
                    requestBody.postal_code &&
                    requestBody.province &&
                    requestBody.street
                )
            ) {
                throw new NotFoundException('Missing some fields');
            }

            const data = await addressService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: 'Success',
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
    ) => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateAddressRequest;

            const data = await addressService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: 'Success',
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
    ) => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = await addressService.delete(id);
            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: 'Success',
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
