import { ErrorFilter } from '@/server/filter/error.filter';
import type { UserResponse } from './../user/user.model';
import type { WebModel } from '@/server/model/web.model';
import { type NextRequest, NextResponse } from 'next/server';
import { createMessagePatchSuccess } from '@/server/helper';
import { resetPasswordService } from './reset-password.service';
import { type ResetPasswordRequest } from './reset-password.model';
import { BadRequestException } from '@/server/lib/error.exception';

export const handlers = {
    PATCH: async (
        req: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<WebModel<UserResponse>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await req.json()) as ResetPasswordRequest;

            if (!(requestBody.password && requestBody.new_password)) {
                throw new BadRequestException(
                    'Password and new password required',
                );
            }

            const data = await resetPasswordService.update(
                id,
                requestBody.password,
                requestBody.new_password,
            );

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Password user'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
