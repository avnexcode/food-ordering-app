import { NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavbarMenuItem } from './NavbarMenuItem';
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

type NavbarMenuListProps = {
    label: string;
    menu: {
        title: string;
        href: string;
        description: string;
    }[];
};

export const NavbarMenuList = (props: NavbarMenuListProps) => {
    return (
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="capitalize">
                    {props.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {props.menu.map(menu => (
                            <NavbarMenuItem
                                key={menu.title}
                                title={menu.title}
                                href={menu.href}
                            >
                                {menu.description}
                            </NavbarMenuItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    );
};
