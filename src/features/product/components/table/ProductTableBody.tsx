import { TableBody } from '@/components/ui/table';
import { ProductTableItem } from './ProductTableItem';
import { useStore } from '@/features/store/api/useStore';
import { renderElements } from '@/utils';

export const ProductTableBody = () => {
    const { data: store } = useStore();
    return (
        <TableBody>
            {store?.products.length === 0 && <p>Tidak ada data</p>}
            {renderElements({
                of: store?.products,
                render: (product, index) => (
                    <ProductTableItem
                        key={index}
                        product={product}
                        index={index}
                    />
                ),
            })}
        </TableBody>
    );
};
