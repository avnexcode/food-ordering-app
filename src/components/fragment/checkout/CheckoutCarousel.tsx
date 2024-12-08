import {
    Carousel,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { CheckoutCarouselList } from './CheckoutCarouselList';

// type CheckoutCarouselProps = {};

export const CheckoutCarousel = () => {
    return (
        <Carousel>
            <CheckoutCarouselList />
            <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10" />
        </Carousel>
    );
};
