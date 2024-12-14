import { TableCell, TableRow } from '@/components/ui/table';
import { ProductCategoryTableMenu } from './ProductCategoryTableMenu';
import { type ProductCategory } from '@prisma/client';
import { toFormatDate } from '@/utils/toFormatDate';

type ProductCategoryTableItemProps = {
    category: ProductCategory;
};

export const ProductCategoryTableItem = (
    props: ProductCategoryTableItemProps,
) => {
    return (
        <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>{props.category.name}</TableCell>
            <TableCell>
                {toFormatDate(new Date(props.category.created_at))}
            </TableCell>
            <TableCell>
                <ProductCategoryTableMenu />
            </TableCell>
        </TableRow>
    );
};
