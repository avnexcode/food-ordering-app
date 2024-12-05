import type { z } from 'zod';
import type { createOrderSchema, updateOrderSchema } from './order.validation';

export type CreateOrderSchema = z.infer<typeof createOrderSchema>;
export type UpdateOrderSchema = z.infer<typeof updateOrderSchema>;
