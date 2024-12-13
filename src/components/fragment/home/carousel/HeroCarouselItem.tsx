import { Card, CardContent } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';

type HeroCarouselItemProps = {
    label: string;
};

export const HeroCarouselItem = (props: HeroCarouselItemProps) => {
    return (
        <CarouselItem>
            <div className="p-1">
                <Card>
                    <CardContent className="flex h-[400px] w-full items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                            {props.label}
                        </span>
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    );
};
