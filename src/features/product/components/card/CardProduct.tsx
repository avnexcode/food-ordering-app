import { toIDR } from '@/utils';
import Link from 'next/link';
import type { ProductWithRelations } from '../../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

type CardProductProps = {
    product: ProductWithRelations;
    onAddToCart?: () => void;
};

export const CardProduct = (props: CardProductProps) => {
    console.log(props.product);
    return (
        <Link
            href={`/checkout/${props.product.id}`}
            className="block h-[350px]"
        >
            <Card>
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg h-full flex flex-col">
                    <CardHeader className='p-0'>
                        <div className="relative h-[200px]">
                            <img
                                src={
                                    props.product.image ??
                                    'https://placehold.co/300x200'
                                }
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className='flex justify-between p-4'>
                        <div className="flex flex-col justify-between items-start">
                            <CardTitle className="font-semibold text-gray-800 text-xl">{props.product.name}</CardTitle>
                            <CardDescription className='mb-2'>{props.product.description}</CardDescription>
                            <p className="text-base text-green-500">{toIDR(Number(props.product.price))}</p>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </Link>
    );
};
