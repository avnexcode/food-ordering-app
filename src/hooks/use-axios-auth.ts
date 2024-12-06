import { axiosAuth } from '@/lib/axios';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import type { AxiosError } from 'axios';

export const useAxiosAuth = () => {
    const { data: session } = useSession();

    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use(
            config => {
                if (!config.headers.Authorization) {
                    config.headers.Authorization = `Bearer ${session?.user.token}`;
                }
                return config;
            },
            (error: AxiosError) => Promise.reject(error),
        );

        const responseIntercept = axiosAuth.interceptors.response.use(
            response => response,
            (error: AxiosError) => Promise.reject(error),
        );

        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept);
            axiosAuth.interceptors.response.eject(responseIntercept);
        };
    }, [session]);

    return axiosAuth;
};
