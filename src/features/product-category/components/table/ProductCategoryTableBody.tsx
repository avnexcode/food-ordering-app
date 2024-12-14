import { TableBody } from '@/components/ui/table';
import { ProductCategoryTableItem } from './ProductCategoryTableItem';
import { useStore } from '@/features/store/api/useStore';

export const ProductCategoryTableBody = () => {
    const { data:store } = useStore() 

    return (
        <TableBody>
            {store?.product_categories?.map((category) => (
                <ProductCategoryTableItem 
                    key={category.id}
                    category={category}
                />
            ))}
        </TableBody>
    );
};
