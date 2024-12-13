import { TableCell, TableRow } from '@/components/ui/table';
import { OrderTableMenu } from './OrderTableMenu';

export const OrderTableItem = () => {
    return (
        <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Hari Ini</TableCell>
            <TableCell>
                <OrderTableMenu />
            </TableCell>
        </TableRow>
    );
};
