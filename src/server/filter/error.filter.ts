import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { HttpException } from '../lib/error.exception';

export class ErrorFilter {
    static catch(error: unknown) {
        if (error instanceof HttpException) {
            return NextResponse.json(
                {
                    status: false,
                    statusCode: error.statusCode,
                    error: error.message,
                },
                { status: error.statusCode },
            );
        }

        if (error instanceof ZodError) {
            return NextResponse.json(
                {
                    status: false,
                    statusCode: 400,
                    error: 'Validation Error',
                    stack: error.errors.map(err => ({
                        field: err.path.join('.'),
                        message: err.message,
                    })),
                },
                { status: 400 },
            );
        }

        return NextResponse.json(
            {
                status: false,
                statusCode: 500,
                error:
                    error instanceof Error
                        ? error.message
                        : 'Internal server error',
            },
            { status: 500 },
        );
    }
}
