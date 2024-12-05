import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import { productCategoryService } from './product-category.service';
import type {
    CreateProductCategoryRequest,
    ProductCategoryWithRelationsResponse,
    UpdateProductCategoryRequest,
} from './product-category.model';
import { NotFoundException } from '@/server/lib/error.exception';
import type { WebModel } from '@/server/model/web.model';
import { type ProductCategory } from '@prisma/client';
import {
    createMessageDeleteSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePostSuccess,
    createMessagePutSuccess,
} from '@/server/helper';
import { headers } from 'next/headers';
import { userService } from '../user';
import { useId } from 'react';

export const handlers = {
    GET: async (): Promise<
        NextResponse<WebModel<ProductCategoryWithRelationsResponse[]>>
    > => {
        try {
            const data = await productCategoryService.getAll();

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageGetSuccess('Product Categories'),
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
    ): Promise<
        NextResponse<WebModel<ProductCategoryWithRelationsResponse>>
    > => {
        try {
            const params = await context.params;
            const id = params?.id;
            const data = await productCategoryService.getById(id);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageGetUniqueSuccess(
                        'Product Category',
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
    ): Promise<NextResponse<WebModel<ProductCategory>>> => {
        try {
            const headerList = await headers();
            const userId = headerList.get('x-user-id');

            const requestBody =
                (await request.json()) as CreateProductCategoryRequest;

            const data = await productCategoryService.create(
                requestBody,
                userId!,
            );

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 201,
                    message: createMessagePostSuccess('Product Category'),
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
    ): Promise<NextResponse<WebModel<ProductCategory>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody =
                (await request.json()) as UpdateProductCategoryRequest;

            if (
                !(
                    requestBody.name &&
                    requestBody.description &&
                    requestBody.store_id
                )
            ) {
                throw new NotFoundException('Some fields are missing');
            }
            const data = await productCategoryService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePutSuccess('Product Category'),
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
    ): Promise<NextResponse<WebModel<ProductCategory>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody =
                (await request.json()) as UpdateProductCategoryRequest;

            const data = await productCategoryService.update(id, requestBody);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Product Category'),
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

            const data = await productCategoryService.delete(id);

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessageDeleteSuccess('Product Category'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
