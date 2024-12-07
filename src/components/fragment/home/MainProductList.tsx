import { CardProduct } from "@/features/product/components/CardProduct";
import { MainProductListSidebar } from "./MainProductListSidebar";

export const MainProductList = () => {
    return (
        <div className="flex w-full gap-2">
            <div className="flex flex-col w-[260px] gap-4">
                <div className="w-full flex flex-col gap-2 p-2">
                    <h1 className="text-xl font-bold">Store</h1>
                    <MainProductListSidebar />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-wrap justify-around gap-4">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
        </div>
    );
};
