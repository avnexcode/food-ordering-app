import { CarouselContent } from '@/components/ui/carousel';
import { HeroCarouselItem } from './HeroCarouselItem';

export const HeroCarouselList = () => {
    return (
        <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
                <HeroCarouselItem key={index} label={String(index)} />
            ))}
        </CarouselContent>
    );
};
