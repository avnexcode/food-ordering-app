import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

type TanstackProviderProps = {
    children: React.ReactNode;
};

export const TanstackProvider: React.FC<TanstackProviderProps> = props => {
    const { children } = props;
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
