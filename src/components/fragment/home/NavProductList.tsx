import { Input } from "@/components/ui/input";
import { NavProductListSelect } from "./NavProductListSelect";

export const NavProductList = () => {
    return (
        <div className="flex justify-between items-center w-full mb-2 px-2">
            <div>
                <h1 className="text-2xl font-bold">Market Foods</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="input">Search: </label>
                    <Input />
                </div>
                <div>
                    <NavProductListSelect />
                </div>
            </div>
        </div>
    );
};
