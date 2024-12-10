import { Table, TableCaption } from '@/components/ui/table';
import { ProductTableHead } from './ProductTableHead';
import { ProductTableBody } from './ProductTableBody';

export const ProductTable = () => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <ProductTableHead />
            <ProductTableBody />
        </Table>
    );
};
