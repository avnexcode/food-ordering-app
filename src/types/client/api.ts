import { type AxiosError } from 'axios';

interface ErrorApiResponse {
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
    onSuccess?: () => void;
    onError?: (error: AxiosError<ErrorApiResponse>) => void;
};
