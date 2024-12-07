import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export const AddressList = () => {
    return (
        <Card className="h-full">
            <CardHeader className="border-b-2">
                <CardTitle className="flex justify-between items-center mb-5 px-2">
                    <span>Alamat</span>
                    <Button size={'sm'}>Buat Alamat Baru</Button>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center gap-2">
                <span>Muhammad Fauzi Nur Aziz</span>
                <span className="block h-4 border border-black"></span>
                <span>081515379818</span>
                <span className="block h-4 border border-black"></span>
                <Button size={'sm'} variant={'secondary'}>
                    USE
                </Button>
            </CardContent>
            <CardDescription className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ratione non, necessitatibus tempora tempore quasi esse,
                voluptatum reprehenderit.
            </CardDescription>
            <CardFooter>
                <Button size={'sm'} variant={'default'}>
                    Gunakan sebagai utama
                </Button>
            </CardFooter>
        </Card>
    );
};
