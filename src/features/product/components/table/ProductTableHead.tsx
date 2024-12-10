import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const ProductTableHead = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Created At</TableHead>
            </TableRow>
        </TableHeader>
    );
};
