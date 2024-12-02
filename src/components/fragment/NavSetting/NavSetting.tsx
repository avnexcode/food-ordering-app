import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { NavSettingLink } from './NavSettingLink';

export function NavSetting() {
    return (
        <Accordion type="single" collapsible className="w-full min-w-[150px]">
            <AccordionItem value="settings">
                <AccordionTrigger>Settings</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col gap-2">
                        <NavSettingLink
                            href="/settings/profile"
                            label="profile"
                        />
                        <NavSettingLink href="/settings/store" label="store" />
                        <NavSettingLink
                            href="/settings/address"
                            label="address"
                        />
                        <NavSettingLink
                            href="/settings/password"
                            label="password"
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
