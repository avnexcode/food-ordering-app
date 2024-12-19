import { CarouselContent } from '@/components/ui/carousel';
import { HeroCarouselItem } from './HeroCarouselItem';

export const HeroCarouselList = () => {
    const images = [
        {
            label: '01',
            src: 'https://res.cloudinary.com/dkmlayydv/image/upload/v1734160926/BannerFoodtzy_1_ecebvk.png',
        },
        {
            label: '02',
            src: 'https://res.cloudinary.com/dkmlayydv/image/upload/v1734160926/BannerFoodtzy_1_ecebvk.png',
        },
        {
            label: '03',
            src: 'https://res.cloudinary.com/dkmlayydv/image/upload/v1734160926/BannerFoodtzy_1_ecebvk.png',
        },
    ];
    return (
        <CarouselContent>
            {images.map((image, index) => (
                <HeroCarouselItem key={index} image={image} />
            ))}
        </CarouselContent>
    );
};
