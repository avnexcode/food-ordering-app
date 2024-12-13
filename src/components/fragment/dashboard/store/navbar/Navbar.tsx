import { NavbarList } from './NavbarList';

const dashboardStoreNavbarMenu = [
    {
        label: 'product',
        href: '/dashboard/store/product',
    },
    {
        label: 'category',
        href: '/dashboard/store/product-category',
    },
    {
        label: 'order',
        href: '/dashboard/store/order',
    },
];

export const Navbar = () => <NavbarList menus={dashboardStoreNavbarMenu} />;
