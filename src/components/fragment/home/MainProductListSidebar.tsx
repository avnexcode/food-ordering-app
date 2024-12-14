import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

export const MainProductListSidebar = () => {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger><h6>Category</h6></AccordionTrigger>
                <AccordionContent>
                    <div className="flex items-start flex-col gap-2">
                        <button>Foods</button>
                        <div className="h-[1px] w-full bg-gray-400"></div>
                        <button>Drinks</button>
                        <div className="h-[1px] w-full bg-gray-400"></div>
                        <button>Snacks</button>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger><h6>Filter by</h6></AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Price
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Range
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Rating
                            </label>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger><h6>Is it animated?</h6></AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
