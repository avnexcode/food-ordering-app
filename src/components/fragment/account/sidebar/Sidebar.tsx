import { KeySquare, ListOrdered, MapPin, UserRound } from 'lucide-react';
import { SidebarList } from './SidebarList';

const accountSettingMenu = [
    {
        label: 'profile',
        href: '/account/profile',
        icon: <UserRound className="w-4 h-4" />,
    },

    {
        label: 'address',
        href: '/account/address',
        icon: <MapPin className="w-4 h-4" />,
    },
    {
        label: 'order',
        href: '/account/order',
        icon: <ListOrdered className="w-4 h-4" />,
    },
    {
        label: 'password',
        href: '/account/password',
        icon: <KeySquare className="w-4 h-4" />,
    },
];

export const Sidebar = () => <SidebarList menus={accountSettingMenu} />;
