import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';

export const CheckoutPage = () => {
    return (
        <>
            <section className=" w-full flex justify-center p-[50px]">
                <main className="w-[80%] flex gap-[10px]">
                    <div className="kiri w-[30%] flex flex-col gap-2 justify-center items-center">
                        <div className="h-[350px] w-[350px]">
                            <img src="https://placehold.co/450x450" alt="" />
                        </div>
                        <div className="w-full relative">
                            <Carousel>
                                <CarouselContent className="flex">
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src="https://placehold.co/400x400"
                                                alt="Image 1"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src="https://placehold.co/400x400"
                                                alt="Image 2"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src="https://placehold.co/400x400"
                                                alt="Image 3"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src="https://placehold.co/400x400"
                                                alt="Image 4"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src="https://placehold.co/400x400"
                                                alt="Image 5"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src="https://placehold.co/400x400"
                                                alt="Image 6"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src="https://placehold.co/400x400"
                                                alt="Image 7"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[100px] w-[100px] flex items-center justify-center flex-shrink-0">
                                            <img
                                                src="https://placehold.co/400x400"
                                                alt="Image 8"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10" />
                                <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10" />
                            </Carousel>
                        </div>
                    </div>
                    <div className="tengah w-[40%]">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle>Yoga Berminyak</CardTitle>
                                <CardDescription>
                                    Terjual 24 • ⭐ 4.9 (11 rating)
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-[50px]">
                                <div className="text-2xl font-bold">
                                    <h1>Rp. 15.000</h1>
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">
                                        Description
                                    </h1>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Laboriosam illo
                                        pariatur magnam quod officiis, quia eius
                                        minima consequatur veritatis corrupti!
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="flex justify-center items-center w-full border-2 border-gray-100 p-[10px]">
                                    <div className=" w-full flex gap-[10px] ">
                                        <div className="logo w-[30%] flex items-center justify-center">
                                            <Avatar className="w-[100px] h-[100px]">
                                                <AvatarImage
                                                    src="https://placehold.co/150x150"
                                                    alt={''}
                                                />
                                                <AvatarFallback>
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div className="w-[70%] flex items-center justify-center">
                                            <div>
                                                <div className="text-xl font-bold ">
                                                    <h1>
                                                        Toko bukan toko tapi
                                                        yoga open BO
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="kanan w-[30%]">
                        <Card>
                            <CardHeader>
                                <CardTitle>Atur jumlah dan catatan</CardTitle>
                                <CardDescription>
                                    <Input
                                        placeholder="Catatan"
                                        className="border-none"
                                    />
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="w-full flex flex-col gap-[50px] ">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-[100px] h-[100px]">
                                            <img
                                                src="https://placehold.co/150x150"
                                                alt=""
                                            />
                                        </div>
                                        <span>Yoga Berminyak</span>
                                    </div>
                                    <div className="w-full">
                                        <div className="w-full flex gap-2 items-center">
                                            <div className="flex items-center items-center gap-5">
                                                <Button>+</Button>
                                                <span className="text-2xl font-bold">
                                                    1
                                                </span>
                                                <Button>-</Button>
                                            </div>
                                            <div className="flex gap-2 font-semibold">
                                                <h1>Stok : </h1>
                                                <span className="text-orange-500">
                                                    Sisa 10
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between items-center text-2xl">
                                        <h1>Subtotal </h1>
                                        <span className="font-bold">
                                            Rp. 15.000
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="w-full flex flex-col gap-3">
                                <Button className="w-full">Add Cart</Button>
                                <Button className="w-full">Checkout</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </section>
        </>
    );
};

CheckoutPage.getLayout = (page: React.ReactElement) => <>{page}</>;
