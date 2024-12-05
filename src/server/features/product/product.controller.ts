import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import { productService } from './product.service';
import type {
    CreateProductRequest,
    ProductWithRelations,
    UpdateProductRequest,
} from './product.model';
import { NotFoundException } from '@/server/lib/error.exception';
import type { WebModel } from '@/server/model/web.model';
import {
    createMessageDeleteSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePostSuccess,
    createMessagePutSuccess,
} from '@/server/helper';
import { type Product } from '@prisma/client';
import { headers } from 'next/headers';

export const handlers = {
    GET: async (): Promise<NextResponse<WebModel<ProductWithRelations[]>>> => {
        try {
            const data = await productService.getAll();

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageGetSuccess('Products'),
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
    ): Promise<NextResponse<WebModel<ProductWithRelations>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await productService.getById(id);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageGetUniqueSuccess(
                        'Product',
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
    ): Promise<NextResponse<WebModel<Product>>> => {
        try {
            const headerList = await headers();
            const userId = headerList.get('x-user-id');

            const requestBody = (await request.json()) as CreateProductRequest;

            const data = await productService.create(requestBody, userId!);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: createMessagePostSuccess('Product'),
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
    ): Promise<NextResponse<WebModel<Product>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await request.json()) as UpdateProductRequest;

            if (
                !(
                    requestBody.name &&
                    requestBody.price &&
                    requestBody.description &&
                    requestBody.stock &&
                    requestBody.category_id &&
                    requestBody.store_id
                )
            ) {
                throw new NotFoundException('Some fields are missing');
            }

            const data = await productService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePutSuccess('Product'),
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
    ): Promise<NextResponse<WebModel<Product>>> => {
        try {
            const params = await context.params;
            const id = params?.id;
            const requestBody = (await request.json()) as UpdateProductRequest;

            const data = await productService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Product'),
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

            const data = await productService.delete(id);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageDeleteSuccess('Product'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
