import { CarouselContent } from '@/components/ui/carousel';
import { CheckoutCarouselItem } from './CheckoutCarouselItem';

const data = [
    {
        url: 'https://placehold.co/400x400',
        alt: 'Image',
    },
    {
        url: 'https://placehold.co/400x400',
        alt: 'Image',
    },
    {
        url: 'https://placehold.co/400x400',
        alt: 'Image',
    },
    {
        url: 'https://placehold.co/400x400',
        alt: 'Image',
    },
    {
        url: 'https://placehold.co/400x400',
        alt: 'Image',
    },
    {
        url: 'https://placehold.co/400x400',
        alt: 'Image',
    },
];

export const CheckoutCarouselList = () => {
    return (
        <CarouselContent className="flex">
            {data.map((src, index) => (
                <CheckoutCarouselItem key={index} src={src} />
            ))}
        </CarouselContent>
    );
};
