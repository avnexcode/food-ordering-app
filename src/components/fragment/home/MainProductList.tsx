import { useProducts } from '@/features/product/api';
import { MainProductListSidebar } from './MainProductListSidebar';
import { CardProductList } from '@/features/product/components/card/CardProductList';

const exampleProducts = [
    {
        id: '1',
        name: 'Burger Special',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format',
        description: 'Juicy beef burger with special sauce',
    },
    {
        id: '2',
        name: 'Pizza Margherita',
        price: 89000,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format',
        description: 'Classic Italian pizza with tomatoes and mozzarella',
    },
    {
        id: '3',
        name: 'Chicken Wings',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format',
        description: 'Crispy chicken wings with BBQ sauce',
    },
];

export const MainProductList = () => {
    const { data: products } = useProducts();
    return (
        <div className="flex w-full gap-2">
            <div className="flex flex-col w-[260px] gap-4">
                <div className="w-full flex flex-col gap-2 p-2">
                    <MainProductListSidebar />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-wrap justify-around gap-4">
                    <CardProductList products={products} />
                </div>
            </div>
        </div>
    );
};
