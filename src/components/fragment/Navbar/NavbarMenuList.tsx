import { NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavbarMenuItemCategory } from './NavbarMenuItemCategory';
import { NavbarMenuItemProduct } from './NavbarMenuItemProduct';
import { NavbarMenuItem } from './NavbarMenuItem';

export const NavbarMenuList = () => {
    return (
        <NavigationMenuList>
            <NavbarMenuItem/>
            {/* <NavbarMenuItemProduct />
            <NavbarMenuItemCategory /> */}
        </NavigationMenuList>
    );
};
