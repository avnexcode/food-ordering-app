export interface WebModel<T> {
    status: boolean;
    statusCode: number;
    message?: string;
    data?: T;
    error?: string;
    stack?: Array<Record<string, unknown>>;
}
