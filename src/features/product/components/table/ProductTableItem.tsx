import { TableCell, TableRow } from '@/components/ui/table';
import { ProductTableMenu } from './ProductTableMenu';
import type { ProductWithRelations } from '../../types';
import { toIDR } from '@/utils';
import { toFormatDate } from '@/utils/toFormatDate';

type ProductTableItemProps = {
    index: number;
    product: ProductWithRelations;
};

export const ProductTableItem = (props: ProductTableItemProps) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{props.index + 1}</TableCell>
            <TableCell>{props.product.name}</TableCell>
            <TableCell>{props.product.category?.name}</TableCell>
            <TableCell>{toIDR(Number(props.product.price))}</TableCell>
            <TableCell>
                {toFormatDate(new Date(props.product.created_at))}
            </TableCell>
            <TableCell>
                <ProductTableMenu id={props.product.id} />
            </TableCell>
        </TableRow>
    );
};
