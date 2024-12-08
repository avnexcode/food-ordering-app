import { CarouselItem } from '@/components/ui/carousel';

type CheckoutCarouselItemProps = {
    src: {
        url: string;
        alt: string;
    };
};

export const CheckoutCarouselItem = (props: CheckoutCarouselItemProps) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                <img
                    src={props.src.url}
                    alt={props.src.alt}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
        </CarouselItem>
    );
};
