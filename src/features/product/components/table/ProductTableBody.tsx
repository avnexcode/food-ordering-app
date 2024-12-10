import { TableBody } from '@/components/ui/table';
import { ProductTableItem } from './ProductTableItem';

export const ProductTableBody = () => {
    return (
        <TableBody>
            <ProductTableItem />
            <ProductTableItem />
            <ProductTableItem />
        </TableBody>
    );
};
