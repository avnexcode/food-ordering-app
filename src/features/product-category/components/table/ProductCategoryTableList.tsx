import { TableBody } from '@/components/ui/table';
import { ProductCategoryTableItem } from './ProductCategoryTableItem';

export const ProductCategoryTableList = () => {
    return (
        <TableBody>
            <ProductCategoryTableItem />
            <ProductCategoryTableItem />
            <ProductCategoryTableItem />
        </TableBody>
    );
};
