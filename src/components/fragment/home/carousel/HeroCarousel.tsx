import {
    Carousel,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { HeroCarouselList } from './HeroCarouselList';

export const HeroCarousel = () => {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
            className="w-3/4"
        >
            <HeroCarouselList />
            <CarouselPrevious className="left-10" />
            <CarouselNext className="right-10" />
        </Carousel>
    );
};
