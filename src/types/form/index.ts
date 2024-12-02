import type { FieldValues, Path } from 'react-hook-form';

export type FormField<T extends FieldValues> = {
    name: Path<T>;
    type: string;
    label: string;
    placeholder: string;
};

// import { z } from 'zod';
// import {
//     UserRole,
//     OrderStatus,
//     PaymentMethod,
//     PaymentStatus,
//     DisbursementStatus,
//     TransactionType,
// } from '@prisma/client';

// // User Schemas
// const passwordSchema = z
//     .string()
//     .min(8, 'Password must be at least 8 characters long')
//     .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
//     .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
//     .regex(
//         /[!@#$%^&*(),.?":{}|<>]/,
//         'Password must contain at least one special character',
//     );

// const emailSchema = z
//     .string()
//     .email('Invalid email address')
//     .refine(
//         email => {
//             const validDomains = [
//                 'gmail.com',
//                 'yahoo.com',
//                 'outlook.com',
//                 'hotmail.com',
//             ];
//             const domain = email.split('@')[1];
//             return validDomains.includes(domain!);
//         },
//         {
//             message:
//                 'Email provider not allowed. Please use a valid email provider',
//         },
//     );

// export const createUserSchema = z.object({
//     username: z
//         .string()
//         .min(3, 'Username must be at least 3 characters')
//         .max(100, 'Username cannot exceed 100 characters'),
//     name: z
//         .string()
//         .min(2, 'Name must be at least 2 characters')
//         .max(100, 'Name cannot exceed 100 characters'),
//     email: emailSchema,
//     phone: z
//         .string()
//         .regex(/^\+?[1-9]\d{1,19}$/, 'Invalid phone number format')
//         .max(20, 'Phone number cannot exceed 20 characters')
//         .optional(),
//     role: z.enum([UserRole.USER, UserRole.ADMIN, UserRole.SELLER]),
//     password: passwordSchema,
//     image: z
//         .string()
//         .url('Invalid image URL')
//         .max(255, 'Image URL cannot exceed 255 characters')
//         .optional(),
// });

// export const updateUserSchema = z.object({
//     username: z
//         .string()
//         .min(3, 'Username must be at least 3 characters')
//         .max(100, 'Username cannot exceed 100 characters')
//         .optional(),
//     name: z
//         .string()
//         .min(2, 'Name must be at least 2 characters')
//         .max(100, 'Name cannot exceed 100 characters')
//         .optional(),
//     phone: z
//         .string()
//         .regex(/^\+?[1-9]\d{1,19}$/, 'Invalid phone number format')
//         .max(20, 'Phone number cannot exceed 20 characters')
//         .optional(),
//     image: z
//         .string()
//         .url('Invalid image URL')
//         .max(255, 'Image URL cannot exceed 255 characters')
//         .optional(),
//     password: passwordSchema.optional(),
// });

// // Address Schemas
// export const createAddressSchema = z.object({
//     label: z
//         .string()
//         .min(3, 'Label must be at least 3 characters')
//         .max(50, 'Label cannot exceed 50 characters'),
//     street: z
//         .string()
//         .min(5, 'Street address must be at least 5 characters')
//         .max(100, 'Street address cannot exceed 100 characters'),
//     village_id: z.number().positive('Invalid village ID'),
//     district_id: z.number().positive('Invalid district ID'),
//     city_id: z.number().positive('Invalid city ID'),
//     province_id: z.number().positive('Invalid province ID'),
//     country: z
//         .string()
//         .max(100, 'Country name cannot exceed 100 characters')
//         .optional(),
//     postal_code: z
//         .string()
//         .regex(/^\d{5}(?:-\d{4})?$/, 'Invalid postal code format')
//         .optional(),
//     description: z
//         .string()
//         .max(150, 'Description cannot exceed 150 characters')
//         .optional(),
//     is_default: z.boolean().default(false),
//     latitude: z.number().min(-90).max(90).optional(),
//     longitude: z.number().min(-180).max(180).optional(),
// });

// export const updateAddressSchema = createAddressSchema.partial();

// // Store Schemas
// export const createStoreSchema = z.object({
//     name: z
//         .string()
//         .min(3, 'Store name must be at least 3 characters')
//         .max(100, 'Store name cannot exceed 100 characters'),
//     description: z.string().optional(),
//     image: z
//         .string()
//         .url('Invalid image URL')
//         .max(255, 'Image URL cannot exceed 255 characters')
//         .optional(),
//     bank_name: z
//         .string()
//         .max(100, 'Bank name cannot exceed 100 characters')
//         .optional(),
//     bank_account: z
//         .string()
//         .max(50, 'Bank account number cannot exceed 50 characters')
//         .optional(),
//     bank_holder: z
//         .string()
//         .max(100, 'Bank holder name cannot exceed 100 characters')
//         .optional(),
// });

// export const updateStoreSchema = createStoreSchema.partial();

// // Product Category Schemas
// export const createProductCategorySchema = z.object({
//     name: z
//         .string()
//         .min(2, 'Category name must be at least 2 characters')
//         .max(100, 'Category name cannot exceed 100 characters'),
//     description: z.string().optional(),
//     store_id: z.string().cuid('Invalid store ID'),
// });

// export const updateProductCategorySchema =
//     createProductCategorySchema.partial();

// // Product Schemas
// export const createProductSchema = z.object({
//     name: z
//         .string()
//         .min(3, 'Product name must be at least 3 characters')
//         .max(100, 'Product name cannot exceed 100 characters'),
//     price: z.number().positive('Price must be greater than 0'),
//     description: z
//         .string()
//         .min(10, 'Description must be at least 10 characters'),
//     images: z
//         .array(z.string().url('Invalid image URL'))
//         .min(1, 'At least one image is required'),
//     stock: z.number().int().min(0, 'Stock cannot be negative'),
//     weight: z.number().positive('Weight must be greater than 0').optional(),
//     category_id: z.string().cuid('Invalid category ID').optional(),
//     store_id: z.string().cuid('Invalid store ID'),
// });

// export const updateProductSchema = createProductSchema.partial();

// // Order Schemas
// export const createOrderSchema = z.object({
//     user_id: z.string().cuid('Invalid user ID'),
//     store_id: z.string().cuid('Invalid store ID'),
//     status: z.enum([
//         OrderStatus.PENDING,
//         OrderStatus.PROCESSING,
//         OrderStatus.SHIPPED,
//         OrderStatus.DELIVERED,
//         OrderStatus.CANCELLED,
//     ]),
//     payment_status: z.enum([
//         PaymentStatus.PENDING,
//         PaymentStatus.EXPIRED,
//         PaymentStatus.PAID,
//         PaymentStatus.FAILED,
//         PaymentStatus.REFUNDED,
//     ]),
//     total_amount: z.number().positive('Total amount must be greater than 0'),
//     shipping_cost: z.number().min(0, 'Shipping cost cannot be negative'),
//     tracking_number: z.string().optional(),
//     note: z.string().optional(),
// });

// export const updateOrderSchema = createOrderSchema.partial();

// // Payment Schemas
// export const createPaymentSchema = z.object({
//     order_id: z.string().cuid('Invalid order ID'),
//     amount: z.number().positive('Payment amount must be greater than 0'),
//     payment_method: z.enum([
//         PaymentMethod.BANK_TRANSFER,
//         PaymentMethod.CREDIT_CARD,
//         PaymentMethod.VIRTUAL_ACCOUNT,
//         PaymentMethod.E_WALLET,
//     ]),
//     status: z.enum([
//         PaymentStatus.PENDING,
//         PaymentStatus.EXPIRED,
//         PaymentStatus.PAID,
//         PaymentStatus.FAILED,
//         PaymentStatus.REFUNDED,
//     ]),
//     midtrans_id: z.string(),
//     payment_url: z.string().url('Invalid payment URL').optional(),
//     paid_at: z.date().optional(),
//     expired_at: z.date(),
// });

// export const updatePaymentSchema = createPaymentSchema.partial();

// // Disbursement Schemas
// export const createDisbursementSchema = z.object({
//     payment_id: z.string().cuid('Invalid payment ID'),
//     store_id: z.string().cuid('Invalid store ID'),
//     amount: z.number().positive('Disbursement amount must be greater than 0'),
//     status: z.enum([
//         DisbursementStatus.PENDING,
//         DisbursementStatus.PROCESSING,
//         DisbursementStatus.SUCCESS,
//         DisbursementStatus.FAILED,
//     ]),
//     bank_name: z.string().min(2, 'Bank name must be at least 2 characters'),
//     account_number: z.string().min(10, 'Invalid account number'),
//     account_name: z
//         .string()
//         .min(3, 'Account name must be at least 3 characters'),
//     description: z.string().optional(),
//     disbursed_at: z.date().optional(),
// });

// export const updateDisbursementSchema = createDisbursementSchema.partial();

// // Transaction Schemas
// export const createTransactionSchema = z.object({
//     type: z.enum([TransactionType.INCOME, TransactionType.EXPENSE]),
//     amount: z.number().positive('Transaction amount must be greater than 0'),
//     description: z.string().optional(),
//     store_id: z.string().cuid('Invalid store ID'),
//     order_id: z.string().cuid('Invalid order ID').optional(),
// });

// export const updateTransactionSchema = createTransactionSchema.partial();

// // Order Item Schemas
// export const createOrderItemSchema = z.object({
//     order_id: z.string().cuid('Invalid order ID'),
//     product_id: z.string().cuid('Invalid product ID'),
//     quantity: z.number().int().positive('Quantity must be greater than 0'),
//     price: z.number().positive('Price must be greater than 0'),
//     subtotal: z.number().positive('Subtotal must be greater than 0'),
// });

// export const updateOrderItemSchema = createOrderItemSchema.partial();

// // Types
// export type CreateUserInput = z.infer<typeof createUserSchema>;
// export type UpdateUserInput = z.infer<typeof updateUserSchema>;
// export type CreateAddressInput = z.infer<typeof createAddressSchema>;
// export type UpdateAddressInput = z.infer<typeof updateAddressSchema>;
// export type CreateStoreInput = z.infer<typeof createStoreSchema>;
// export type UpdateStoreInput = z.infer<typeof updateStoreSchema>;
// export type CreateProductCategoryInput = z.infer<
//     typeof createProductCategorySchema
// >;
// export type UpdateProductCategoryInput = z.infer<
//     typeof updateProductCategorySchema
// >;
// export type CreateProductInput = z.infer<typeof createProductSchema>;
// export type UpdateProductInput = z.infer<typeof updateProductSchema>;
// export type CreateOrderInput = z.infer<typeof createOrderSchema>;
// export type UpdateOrderInput = z.infer<typeof updateOrderSchema>;
// export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
// export type UpdatePaymentInput = z.infer<typeof updatePaymentSchema>;
// export type CreateDisbursementInput = z.infer<typeof createDisbursementSchema>;
// export type UpdateDisbursementInput = z.infer<typeof updateDisbursementSchema>;
// export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;
// export type UpdateTransactionInput = z.infer<typeof updateTransactionSchema>;
// export type CreateOrderItemInput = z.infer<typeof createOrderItemSchema>;
// export type UpdateOrderItemInput = z.infer<typeof updateOrderItemSchema>;
