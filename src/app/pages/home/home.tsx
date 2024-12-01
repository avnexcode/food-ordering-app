import { MainLayout } from "@/components/layout/MainLayout";
import WordRotate from "@/components/ui/word-rotate";
import Head from "next/head";
import { MoveRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
export const HomePage = () => {
    return (
        <>
            <Head>
                <title>DisOrder Eats</title>
                <meta name="description" content="KAWAAAIIII" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="px-20">
                <header className="flex gap-10">
                    <Carousel className="w-3/4">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex h-[400px] w-full items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-10" />
                        <CarouselNext className="right-10" />
                    </Carousel>
                    <div className="flex flex-col justify-between items-center p-4 w-1/4 shadow-md rounded-lg">
                        <WordRotate
                            className="text-4xl font-bold text-black dark:text-white w-full"
                            words={["Order Now", "Fast Delivery", "Hot Deals", "Fresh Meals", "Tasty Food"]}
                        />
                        <span className="text-center font-bold text-4xl">Black Nigga Flash <br /> Sale - 50% off <br /> SiteWide!</span>
                        <Button className="px-10 py-2 rounded-3xl"> Check Offers <MoveRight /> </Button>
                    </div>

                </header>
                <nav className="mt-10">
                    <div className="flex flex-col gap-10 shadow-md p-4">
                        <div className="flex items-center">
                            <div className="w-1/2">
                                <Carousel
                                    opts={{
                                        align: "start",
                                    }}
                                    className="w-full max-w-xl"
                                >
                                    <CarouselContent className="">
                                        {Array.from({ length: 12 }).map((_, index) => (
                                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 w-full">
                                                <div className="p-1">
                                                    <Card>
                                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="-left-3" />
                                    <CarouselNext className="-right-3" />
                                </Carousel>
                            </div>
                            <div className="w-1/2 flex items-center justify-center">
                                <h1 className="text-5xl font-bold">Hello! Yoga Berminyak</h1>
                            </div>
                        </div>
                        <div className="flex justify-evenly">
                            <Marquee pauseOnHover className="[--duration:60s]">
                                <Button className="px-10 py-2 rounded-3xl">Add to Cart</Button>
                                <Button className="px-10 py-2 rounded-3xl">Buy Now</Button>
                                <Button className="px-10 py-2 rounded-3xl">Checkout</Button>
                                <Button className="px-10 py-2 rounded-3xl">View Details</Button>
                                <Button className="px-10 py-2 rounded-3xl">Add to Wishlist</Button>
                                <Button className="px-10 py-2 rounded-3xl">Apply Coupon</Button>
                                <Button className="px-10 py-2 rounded-3xl">Track Order</Button>
                                <Button className="px-10 py-2 rounded-3xl">Continue Shopping</Button>
                                <Button className="px-10 py-2 rounded-3xl">Place Order</Button>
                                <Button className="px-10 py-2 rounded-3xl">Save for Later</Button>
                            </Marquee>
                        </div>
                    </div>
                </nav>
            </main>
        </>
    )
}

HomePage.getLayout = (page: React.ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};