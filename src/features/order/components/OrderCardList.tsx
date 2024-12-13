import { OrderCardItem } from './OrderCardItem';

export const OrderCardList = () => {
    return (
        <main className="flex flex-col gap-2 mb-10">
            <OrderCardItem />
            <OrderCardItem />
            <OrderCardItem />
            <OrderCardItem />
        </main>
    );
};
