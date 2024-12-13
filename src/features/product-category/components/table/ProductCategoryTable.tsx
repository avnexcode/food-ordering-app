import { Table, TableCaption } from '@/components/ui/table';

import { ProductCategoryTableHead } from './ProductCategoryTableHead';
import { ProductCategoryTableBody } from './ProductCategoryTableBody';

export const ProductCategoryTable = () => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <ProductCategoryTableHead />
            <ProductCategoryTableBody />
        </Table>
    );
};
