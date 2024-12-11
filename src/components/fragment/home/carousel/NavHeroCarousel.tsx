import {
    Carousel,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { NavHeroCarouselList } from './NavHeroCarouselList';

export const NavHeroCarousel = () => {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
            opts={{
                align: 'start',
            }}
            className="w-full max-w-xl"
        >
            <NavHeroCarouselList />
            <CarouselPrevious className="-left-3" />
            <CarouselNext className="-right-3" />
        </Carousel>
    );
};
