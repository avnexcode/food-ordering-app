import { CarouselContent } from '@/components/ui/carousel';
import { HeroCarouselItem } from './HeroCarouselItem';

export const HeroCarouselList = () => {
    const images = [
        {
            label: '01',
            src: 'https://res.cloudinary.com/dkmlayydv/image/upload/v1734758167/Artboard_1_1_mvehgq.png',
        },
        {
            label: '02',
            src: 'https://res.cloudinary.com/dkmlayydv/image/upload/v1734757978/Artboard_2_1_woo0ku.png',
        },
        {
            label: '03',
            src: 'https://res.cloudinary.com/dkmlayydv/image/upload/v1734757779/Artboard_3_1_f5t383.png',
        },
        {
            label: '04',
            src: 'https://res.cloudinary.com/dkmlayydv/image/upload/v1734757762/Artboard_4_1_aqyqn0.png',
        },
        {
            label: '05',
            src: 'https://res.cloudinary.com/dkmlayydv/image/upload/v1734757751/Artboard_5_1_pqco0a.png',
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
