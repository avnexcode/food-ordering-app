import { Table, TableCaption } from '@/components/ui/table';

import { OrderTableBody } from './OrderTableBody';
import { OrderTableHead } from './OrderTableHead';

export const OrderTable = () => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <OrderTableHead />
            <OrderTableBody />
        </Table>
    );
};
