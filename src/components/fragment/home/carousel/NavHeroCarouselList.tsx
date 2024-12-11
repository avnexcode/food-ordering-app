import { CarouselContent } from '@/components/ui/carousel';
import { NavHeroCarouselItem } from './NavHeroCarouselItem';

export const NavHeroCarouselList = () => {
    return (
        <CarouselContent className="">
            {Array.from({ length: 12 }).map((_, index) => (
                <NavHeroCarouselItem key={index} label={String(index)} />
            ))}
        </CarouselContent>
    );
};
