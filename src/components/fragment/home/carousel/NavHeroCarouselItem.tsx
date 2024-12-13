import { CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
type NavHeroCarouselItemProps = {
    label: string;
};

export const NavHeroCarouselItem = (props: NavHeroCarouselItemProps) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/4 w-full">
            <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                            {props.label + 1}
                        </span>
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    );
};
