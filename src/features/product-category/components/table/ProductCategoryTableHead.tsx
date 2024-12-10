import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const ProductCategoryTableHead = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Created At</TableHead>
            </TableRow>
        </TableHeader>
    );
};
