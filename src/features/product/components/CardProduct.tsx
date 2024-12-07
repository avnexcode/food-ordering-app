import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const CardProduct = () => {
    return (
        <Card className="w-[280px]">
            <CardHeader className='p-0'>
                <Image
                    className="object-cover"
                    src=""
                    alt="Product Image"
                    width={400}
                    height={400}
                />
            </CardHeader>
            <CardContent className='flex justify-between p-4'>
                <div className="flex flex-col justify-between items-start">
                    <p className="text-xs text-gray-500 uppercase">Category</p>
                    <CardTitle className="font-semibold text-gray-800 mb-2 text-xl">Product Title</CardTitle>
                    <p className="text-base text-green-500">Rp. 15.000</p>
                </div>
                <div className='flex items-end'>
                    <Button>
                        <ShoppingCart />
                    </Button>
                </div>
            </CardContent>
        </Card >
    )
}