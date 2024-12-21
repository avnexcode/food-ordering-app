import midtrans from 'midtrans-client';
import { env } from '@/env';

export const midtransSnap = new midtrans.Snap({
    isProduction: env.NODE_ENV === 'production',
    serverKey: env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY,
    clientKey: env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
});
