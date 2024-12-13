import { TableBody } from '@/components/ui/table';
import { ProductCategoryTableItem } from './ProductCategoryTableItem';

export const ProductCategoryTableBody = () => {
    return (
        <TableBody>
            <ProductCategoryTableItem />
            <ProductCategoryTableItem />
            <ProductCategoryTableItem />
        </TableBody>
    );
};
