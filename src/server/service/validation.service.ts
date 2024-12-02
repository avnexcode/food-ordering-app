import { type ZodType } from 'zod';

export const validateSchema = <T>(zodType: ZodType<T>, data: T): T => {
    return zodType.parse(data);
};
