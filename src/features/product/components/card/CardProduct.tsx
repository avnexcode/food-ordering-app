import { toIDR } from '@/utils';
import Link from 'next/link';
import type { ProductWithRelations } from '../../types';

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
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg h-full flex flex-col">
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
                <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {props.product.name}
                        </h3>
                        {props.product.description && (
                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                {props.product.description}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-primary font-bold">
                            {toIDR(Number(props.product.price))}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
