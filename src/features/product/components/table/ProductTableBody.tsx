import { TableBody } from '@/components/ui/table';
import { ProductTableItem } from './ProductTableItem';
import { useStore } from '@/features/store/api/useStore';

export const ProductTableBody = () => {
    const { data: store } = useStore();
    return (
        <TableBody>
            {store?.products.length === 0 && <p>Tidak ada data</p>}
            {store?.products.map((product, index) => (
                <ProductTableItem key={index} product={product} />
            ))}
        </TableBody>
    );
};
