import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CirclePlus } from 'lucide-react';

export const ProductCategoryTableHeader = () => {
    return (
        <header className="flex w-full py-2">
            <div className="w-full">
                <Input className="w-1/2" placeholder="Search" />
            </div>
            <div className="">
                <Button
                    size={'sm'}
                    className="rounded-full bg-green-600 px-6 hover:bg-green-700"
                >
                    <CirclePlus />
                    New
                </Button>
            </div>
        </header>
    );
};
