import { BadRequestException } from '@/server/lib/error.exception';
import { userRepository, userService } from '../user';
import bcrypt from 'bcrypt';
import { toUserResponse } from '@/server/utils';
import { validateSchema } from '@/server/service';
import { resetPasswordSchema } from './reset-password.validation';
import type { ResetPasswordRequest } from './reset-password.model';
import type { UserResponse } from '../user/user.model';
import { resetPasswordRepository } from './reset-password.repository';

export const resetPasswordService = {
    updatePassword: async (
        id: string,
        password: string,
        newPassword: string,
    ): Promise<UserResponse> => {
        await userService.getById(id);

        const validatedRequest: ResetPasswordRequest = validateSchema(
            resetPasswordSchema,
            {
                password,
                new_password: newPassword,
            },
        );
        console.log({ password, newPassword, id });

        const existingUser = await userRepository.findUniqueId(id);

        const validatedPassword = existingUser
            ? await bcrypt.compare(
                  validatedRequest.password,
                  existingUser.password!,
              )
            : false;

        if (!validatedPassword) {
            throw new BadRequestException('Invalid password');
        }

        const passwordHashed = await bcrypt.hash(
            validatedRequest.new_password,
            10,
        );
        const user = await resetPasswordRepository.updateOnce(
            id,
            passwordHashed,
        );

        return toUserResponse(user);
    },
};
