import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import {
    createStore,
    deleteStore,
    getStoreById,
    getStores,
    updateStore,
} from './store.service';
import type { CreateStoreRequest, UpdateStoreRequest } from './store.model';
import { NotFoundException } from '@/server/lib/error.exception';

export const handlers = {
    GET: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ) => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = id ? await getStoreById(id) : await getStores();

            return NextResponse.json(
                { status: true, statusCode: 200, message: 'Success', data },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    POST: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ) => {
        try {
            const requestBody = (await request.json()) as CreateStoreRequest;

            const data = await createStore(requestBody);

            return NextResponse.json(
                { status: true, statusCode: 201, message: 'Success', data },
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

            const requestBody = (await request.json()) as UpdateStoreRequest;

            if (!requestBody.name) {
                throw new NotFoundException('Some fields are missing');
            }

            const data = await updateStore(id, requestBody);

            return NextResponse.json(
                { status: true, statusCode: 200, message: 'Success', data },
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

            const requestBody = (await request.json()) as UpdateStoreRequest;

            const data = await updateStore(id, requestBody);

            return NextResponse.json(
                { status: true, statusCode: 200, message: 'Success', data },
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
            const data = await deleteStore(id);
            return NextResponse.json(
                { status: true, statusCode: 200, message: 'Success', data },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
