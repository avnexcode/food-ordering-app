import {
    Card,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import { useStore } from '../api/useStore';
import { toFormatDate } from '@/utils/toFormatDate';

export const StoreCategory = () => {
    const { data: store } = useStore();

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Store Categories
            </h1>
            <div className="flex flex-col gap-4">
                {store?.product_categories?.map(category => (
                    <Card
                        key={category.id}
                        className="w-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between p-4">
                            <div>
                                <CardTitle className="text-lg font-semibold">
                                    {category.name}
                                </CardTitle>
                                <CardDescription className="text-gray-600 text-sm">
                                    {category.description}
                                </CardDescription>
                            </div>
                            <div className="flex-shrink-0 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-medium">
                                {toFormatDate(new Date(category.created_at))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

{/* <Card
    key={category.id}
    className="rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all h-full"
>
    <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
        <CardTitle className="text-lg font-semibold">
            {category.name}
        </CardTitle>
    </CardHeader>
    <CardContent className="p-4">
        <CardDescription className="text-gray-600">
            {category.description}
        </CardDescription>
    </CardContent>
</Card> */}