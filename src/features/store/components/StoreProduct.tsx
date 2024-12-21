import { toIDR } from '@/utils';
import { useStoreId } from '../api/useStoreId';

type StoreProductProps = { storeId: string };

export const StoreProduct = (props: StoreProductProps) => {
    const { storeId } = props;
    const { data: store, error, isLoading } = useStoreId(storeId);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading store data</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Store Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {store?.products?.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-semibold">
                            {product.name}
                        </h2>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-lg font-bold mt-2">
                            {toIDR(Number(product.price))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
