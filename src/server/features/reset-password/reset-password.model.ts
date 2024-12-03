import type { z } from 'zod';
import type { resetPasswordSchema } from './reset-password.validation';

export type ResetPasswordRequest = z.infer<typeof resetPasswordSchema>;
