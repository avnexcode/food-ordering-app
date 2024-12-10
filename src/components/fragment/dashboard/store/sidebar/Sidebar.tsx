import { Settings, Table2 } from 'lucide-react';
import { SidebarList } from './SidebarList';

const dashboardStoreMenu = [
    {
        label: 'dashboard',
        href: '/dashboard/store/product',
        icon: <Table2 className="w-4 h-4" />,
        activeRoutes: [
            '/dashboard/store/product',
            '/dashboard/store/product-category',
            '/dashboard/store/order',
        ],
    },
    {
        label: 'settings',
        href: '/dashboard/store/settings',
        icon: <Settings className="w-4 h-4" />,
    },
];

export const Sidebar = () => <SidebarList menu={dashboardStoreMenu} />;
