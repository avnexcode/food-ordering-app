import { Table, TableCaption } from '@/components/ui/table';
import { ProductTableHead } from './ProductTableHead';
import { ProductTableList } from './ProductTableList';

export const ProductTable = () => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <ProductTableHead />
            <ProductTableList />
        </Table>
    );
};
