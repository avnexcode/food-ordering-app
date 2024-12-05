import { z } from 'zod';

export const createOrderSchema = z.object({});
export const updateOrderSchema = createOrderSchema.partial().extend({});
