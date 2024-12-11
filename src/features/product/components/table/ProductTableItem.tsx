import { TableCell, TableRow } from '@/components/ui/table';
import { ProductTableMenu } from './ProductTableMenu';

export const ProductTableItem = () => {
    return (
        <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Burger King</TableCell>
            <TableCell>Snack</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Hari ini</TableCell>
            <TableCell>
                <ProductTableMenu />
            </TableCell>
        </TableRow>
    );
};
