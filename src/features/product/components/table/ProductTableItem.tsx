import { TableCell, TableRow } from '@/components/ui/table';
import { ProductTableMenu } from './ProductTableMenu';
import type { Product } from '@prisma/client';

type ProductTableItemProps = {
    product: Product;
};

export const ProductTableItem = (props: ProductTableItemProps) => {
    return (
        <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>{props.product.name}</TableCell>
            <TableCell>Snack</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Hari ini</TableCell>
            <TableCell>
                <ProductTableMenu id={props.product.id} />
            </TableCell>
        </TableRow>
    );
};
