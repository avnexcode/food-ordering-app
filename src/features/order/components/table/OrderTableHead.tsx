import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const OrderTableHead = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Created At</TableHead>
            </TableRow>
        </TableHeader>
    );
};
