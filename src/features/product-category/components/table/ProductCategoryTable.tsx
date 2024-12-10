import { Table, TableCaption } from '@/components/ui/table';

import { ProductCategoryTableHead } from './ProductCategoryTableHead';
import { ProductCategoryTableList } from './ProductCategoryTableList';

export const ProductCategoryTable = () => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <ProductCategoryTableHead />
            <ProductCategoryTableList />
        </Table>
    );
};
