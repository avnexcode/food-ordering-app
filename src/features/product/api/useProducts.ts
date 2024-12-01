import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type Product } from '../types';

export const useProducts = () =>
    useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await axios.get<Product[]>(
                'https://fakestoreapi.com/products',
            );
            return response.data;
        },
    });
