import type { CreateOrderSchema, UpdateOrderSchema } from './order.model';

export const orderService = {
    getAll: async () => null,
    getByUser: async (user_id: string) => null,
    getById: async (id: string) => null,
    create: async (request: CreateOrderSchema) => null,
    update: async (id: string, request: UpdateOrderSchema) => null,
    delete: async (id: string) => null,
};
