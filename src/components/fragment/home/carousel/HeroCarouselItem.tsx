import { Card, CardContent } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import { Fullscreen } from 'lucide-react';
import Image from 'next/image';

type HeroCarouselItemProps = {
    label: string;
};

export const HeroCarouselItem = (props: HeroCarouselItemProps) => {
    return (
        <CarouselItem>
            <div className="p-1">
                <Card className="border-none outline-none shadow-none">
                    <CardContent className="flex h-[470px] w-full items-center justify-center p-6">
                        <div className="overflow-hidden h-[470px] rounded-lg w-full">
                            <Image
                                src="https://res.cloudinary.com/dkmlayydv/image/upload/v1734160926/BannerFoodtzy_1_ecebvk.png"
                                alt={props.label}
                                width={1300}
                                height={400}
                                className="object-cover w-full h-full"
                                unoptimized
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    );
};
