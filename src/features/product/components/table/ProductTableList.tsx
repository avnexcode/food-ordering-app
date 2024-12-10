import { TableBody } from '@/components/ui/table';
import { ProductTableItem } from './ProductTableItem';

export const ProductTableList = () => {
    return (
        <TableBody>
            <ProductTableItem />
            <ProductTableItem />
            <ProductTableItem />
        </TableBody>
    );
};
