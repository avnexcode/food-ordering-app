import { toIDR } from '@/utils';
import { useStoreId } from '../api/useStoreId';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

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
                    <Card
                        key={product.id}
                        className="shadow-md hover:shadow-lg transition-shadow rounded-lg border border-gray-200"
                    >
                        <CardHeader className="p-0">
                            <div className="relative h-48 bg-gray-200">
                                <img
                                    src={product.images?.[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 flex flex-col">
                            <CardTitle className="text-lg font-semibold">
                                {product.name}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 mb-2">
                                {product.description}
                            </CardDescription>
                            <p className="text-lg text-green-600">
                                {toIDR(Number(product.price))}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
