import { TableCell, TableRow } from '@/components/ui/table';
import { ProductCategoryTableMenu } from './ProductCategoryTableMenu';
import { type ProductCategory } from '@prisma/client';
import { toFormatDate } from '@/utils/toFormatDate';

type ProductCategoryTableItemProps = {
    index: number;
    category: ProductCategory;
};

export const ProductCategoryTableItem = (
    props: ProductCategoryTableItemProps,
) => {
    return (
        <TableRow>
            <TableCell className="font-medium">{props.index + 1}</TableCell>
            <TableCell>{props.category.name}</TableCell>
            <TableCell>
                {toFormatDate(new Date(props.category.created_at))}
            </TableCell>
            <TableCell>
                <ProductCategoryTableMenu id={props.category.id} />
            </TableCell>
        </TableRow>
    );
};
