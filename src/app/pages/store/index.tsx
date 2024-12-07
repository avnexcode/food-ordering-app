import { MainLayout } from '@/components/layout/MainLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { FormItem } from '@/components/ui/form';

export const StorePage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-[80% flex flex-col gap-[50px] pb-[50px]">
                <CardContent className="flex justify-center items-center w-full border-2 border-gray-100 p-[10px]">
                    <div className="kiri w-[50%] flex">
                        <CardContent className="logo w-[30%] flex justify-center items-center">
                            <Avatar className="w-[150px] h-[150px]">
                                <AvatarImage
                                    src="https://placehold.co/150x150"
                                    alt={''}
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CardContent>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl ">
                                    <h1>Toko bukan toko tapi yoga open BO</h1>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-center gap-[10px]">
                                <Button size="lg">Follow</Button>
                                <Button size="lg">Chat Pesan</Button>
                            </CardContent>
                        </Card>
                    </div>
                    <FormItem className="kanan w-[50%] flex justify-center items-center gap-[10px]">
                        <Card className="border-none">
                            <CardContent className="border-r-4 p-[10px]">
                                <div className="rate flex flex-col items-center gap-[10px]">
                                    <span className="flex gap-[10px]">
                                        {/* <i className="fa fa-star" aria-hidden="true"></i> */}
                                        ⭐5.5
                                    </span>
                                    <p>Rating & uLASAN</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-none">
                            <CardContent className="border-r-4 p-[10px]">
                                <div className="rate flex flex-col items-center gap-[10px]">
                                    <span className="flex gap-[10px]">
                                        + 6 jam
                                    </span>
                                    <p>Pesanan Di proses</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-none">
                            <CardContent className="p-[10px]">
                                <div className="rate flex flex-col items-center gap-[10px]">
                                    <span className="flex gap-[10px]">
                                        <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                        07:00-17:00
                                    </span>
                                    <p>Jam Operasional</p>
                                </div>
                            </CardContent>
                        </Card>
                    </FormItem>
                </CardContent>
                <div className="w-full flex flex-col gap-[10px]">
                    <div className="w-full">
                        <h1>Popular Product</h1>
                    </div>
                    <div className="w-full flex justify-around">
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Seblak Prasmanan</h1>
                                <h1 className="font-bold">Rp 10.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 4.5 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Nasi Goreng</h1>
                                <h1 className="font-bold">Rp 15.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 4.4 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Burger</h1>
                                <h1 className="font-bold">Rp 10.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 4.9 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Somi Pikacu</h1>
                                <h1 className="font-bold">Rp 10.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 5 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Somay</h1>
                                <h1 className="font-bold">Rp 20.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 5.0 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <div className="w-fulln flex justify-center">
                    <img src="https://placehold.co/1000x300" alt="" />
                </div>
                <div className="w-full flex flex-col gap-[10px]">
                    <div className="w-full">
                        <h1>Best Seller</h1>
                    </div>
                    <div className="w-full flex justify-around">
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Seblak Prasmanan</h1>
                                <h1 className="font-bold">Rp 10.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 4.5 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Nasi Goreng</h1>
                                <h1 className="font-bold">Rp 15.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 4.4 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Burger</h1>
                                <h1 className="font-bold">Rp 10.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 4.9 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Somi Pikacu</h1>
                                <h1 className="font-bold">Rp 10.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 5 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <img
                                    src="https://placehold.co/150x150"
                                    alt=""
                                />
                            </CardHeader>
                            <CardContent>
                                <h1>Somay</h1>
                                <h1 className="font-bold">Rp 20.000</h1>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <h1>⭐ 5.0 </h1>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

StorePage.getLayout = (page: React.ReactElement) => (
    <MainLayout>{page}</MainLayout>
);
