import { type AxiosError } from 'axios';

export interface ErrorApiResponse {
    message: string;
    statusCode?: number;
    error?: string;
}

export type ApiResponse<T> = {
    status: boolean;
    statusCode: number;
    message: string;
    data: T;
};

export type ApiProps = {
    onMutate?: () => Promise<void>;
    onSuccess?: () => Promise<void>;
    onError?: (error: AxiosError<ErrorApiResponse>) => Promise<void>;
};
