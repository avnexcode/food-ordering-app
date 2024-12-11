import { TableCell, TableRow } from '@/components/ui/table';
import { ProductCategoryTableMenu } from './ProductCategoryTableMenu';

export const ProductCategoryTableItem = () => {
    return (
        <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Snack</TableCell>
            <TableCell>Hari ini</TableCell>
            <TableCell>
                <ProductCategoryTableMenu />
            </TableCell>
        </TableRow>
    );
};
