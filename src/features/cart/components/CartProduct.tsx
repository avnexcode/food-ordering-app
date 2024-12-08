import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export const CartProduct = () => {
    return (
        <Card className="w-[700px]">
            <CardHeader>
                <CardTitle className='flex text-xl items-center gap-4'> <Checkbox /> Toko Lendir Mas Yoga</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4 w-full">
                    <Checkbox />
                    <img
                        className="w-[80px] h-[80px] object-cover"
                        src={'https://placehold.co/80x80?text=Hello+World'}
                        alt="gambar"
                    />
                    <div className="flex justify-between w-full">
                        <span className="w-[400px]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Neque, vel.
                        </span>
                        <span className="w-[150px]">Rp. 100.000.00</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button>
                    <span>-</span>
                </Button>
                <span className="px-4">1</span>
                <Button>
                    <span>+</span>
                </Button>
            </CardFooter>
        </Card>
    );
};
