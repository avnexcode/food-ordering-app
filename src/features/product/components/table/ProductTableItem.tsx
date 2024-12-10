import { TableCell, TableRow } from '@/components/ui/table';
import { Ellipsis } from 'lucide-react';

export const ProductTableItem = () => {
    return (
        <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Burger King</TableCell>
            <TableCell>Snack</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Hari ini</TableCell>
            <TableCell>
                <Ellipsis size={20} strokeWidth={2} />
            </TableCell>
        </TableRow>
    );
};
