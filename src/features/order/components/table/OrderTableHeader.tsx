import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export const OrderTableHeader = () => {
    return (
        <header className="flex w-full py-2 justify-end">
            <Select>
                <SelectTrigger className="focus:ring-0 focus:ring-zinc-200 w-[180px]">
                    <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="apple">Pending</SelectItem>
                        <SelectItem value="banana">Processing</SelectItem>
                        <SelectItem value="blueberry">Shipped</SelectItem>
                        <SelectItem value="grapes">Delivered</SelectItem>
                        <SelectItem value="pineapple">Cancelled</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </header>
    );
};
