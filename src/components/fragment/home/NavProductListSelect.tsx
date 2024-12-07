import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const NavProductListSelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="font-poppins">
                <SelectItem value="highest" className="font-poppins">Highest Price</SelectItem>
                <SelectItem value="lowest" className="font-poppins">Lowest Price</SelectItem>
                <SelectItem value="review" className="font-poppins">Review</SelectItem>
            </SelectContent>
        </Select>
    );
};
