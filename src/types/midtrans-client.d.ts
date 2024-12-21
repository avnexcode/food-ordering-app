declare module 'midtrans-client' {
    export class Snap {
        constructor(config: {
            isProduction: boolean;
            serverKey: string;
            clientKey: string;
        });
        createTransaction(
            parameter: object,
        ): Promise<{ token: string; redirect_url: string }>;
    }

    export class CoreApi {
        constructor(config: {
            isProduction: boolean;
            serverKey: string;
            clientKey: string;
        });
        charge(parameter: object): Promise<object>;
        transaction: {
            status(orderId: string): Promise<object>;
            cancel(orderId: string): Promise<object>;
            approve(orderId: string): Promise<object>;
            refund(orderId: string, parameter: object): Promise<object>;
        };
    }
}
