import { BadRequestException } from '@/server/lib/error.exception';
import { userRepository, userService } from '../user';
import bcrypt from 'bcrypt';
import { toUserResponse } from '@/server/utils';
import { validateSchema } from '@/server/service';
import { resetPasswordSchema } from './reset-password.validation';
import type { ResetPasswordRequest } from './reset-password.model';
export const resetPasswordService = {
    update: async (id: string, password: string, newPassword: string) => {
        await userService.getById(id);

        const validatedRequest: ResetPasswordRequest = validateSchema(
            resetPasswordSchema,
            {
                password,
                new_password: newPassword,
            },
        );

        const existingUser = await userRepository.findUniqueId(id);

        const validatedPassword = existingUser
            ? await bcrypt.compare(
                  validatedRequest.password!,
                  existingUser.password!,
              )
            : false;

        if (!validatedPassword) {
            throw new BadRequestException('Invalid password');
        }

        const user = await userRepository.updateOne(id, {
            password: newPassword,
        });

        return toUserResponse(user);
    },
};
