import { useAxiosAuth } from '@/hooks/use-axios-auth';

type AxiosProviderProps = {
    children: React.ReactNode;
};
export const AxiosProvider: React.FC<AxiosProviderProps> = props => {
    useAxiosAuth();
    const { children } = props;
    return <>{children}</>;
};
