import { Input } from '@/components/ui/input';
import { CreateProductDialog } from '../dialog/CreateProdductDialog';

export const ProductTableHeader = () => {
    return (
        <header className="flex w-full py-2">
            <div className="w-full">
                <Input className="w-1/2" placeholder="Search" />
            </div>
            <div className="">
                <CreateProductDialog />
            </div>
        </header>
    );
};
