import { useQuery } from '@tanstack/react-query';

export const useProductCategories = () => {
    return useQuery({
        queryKey: ['product-categories'],
        queryFn: async () => {
            return [
                {
                    id: 'Apem',
                    name: 'Apem',
                },
                {
                    id: 'Donat',
                    name: 'Donat',
                },
            ];
        },
    });
};
