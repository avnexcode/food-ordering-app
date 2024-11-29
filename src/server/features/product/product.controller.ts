import { ErrorFilter } from '@/server/filter/error.filter';
import { NextResponse, type NextRequest } from 'next/server';
import {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct,
} from './product.service';
import type {
    CreateProductRequest,
    UpdateProductRequest,
} from './product.model';
import { NotFoundException } from '@/server/lib/error.exception';

export const handlers = {
    GET: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ) => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = id ? await getProductById(id) : await getProducts();

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
            const requestBody = (await request.json()) as CreateProductRequest;

            const data = await createProduct(
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

            const data = await updateProduct(id, requestBody);

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
            const requestBody = (await request.json()) as UpdateProductRequest;

            const data = await updateProduct(id, requestBody);

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

            const data = await deleteProduct(id);

            return NextResponse.json(
                { status: true, statusCode: 200, message: 'Success', data },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
