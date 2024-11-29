import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import { productCategoryService } from './product-category.service';
import type {
    CreateProductCategoryRequest,
    UpdateProductCategoryRequest,
} from './product-category.model';
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
                ? await productCategoryService.getById(id)
                : await productCategoryService.getAll();

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
            const requestBody =
                (await request.json()) as CreateProductCategoryRequest;

            const data = await productCategoryService.create(
                requestBody,
                'cm41dvsts0001rf2wyh0ajkne',
            );

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

            const requestBody =
                (await request.json()) as UpdateProductCategoryRequest;

            if (!requestBody.name) {
                throw new NotFoundException('Some fields are missing');
            }
            const data = await productCategoryService.update(id, requestBody);

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

            const requestBody =
                (await request.json()) as UpdateProductCategoryRequest;

            const data = await productCategoryService.update(id, requestBody);

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

            const data = await productCategoryService.delete(id);

            return NextResponse.json(
                { status: true, statusCode: 200, message: 'Success', data },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
