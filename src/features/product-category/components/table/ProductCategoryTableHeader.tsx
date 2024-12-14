import { Input } from '@/components/ui/input';
import { CreateProductCategoryDialog } from '../dialog/CreateProductCategoryDialog';

export const ProductCategoryTableHeader = () => {
    return (
        <header className="flex w-full py-2">
            <div className="w-full">
                <Input className="w-1/2" placeholder="Search" />
            </div>
            <div className="">
                <CreateProductCategoryDialog/>
            </div>
        </header>
    );
};
