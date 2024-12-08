import { KeySquare, MapPin, Store, UserRound } from 'lucide-react';
import { NavSettingList } from './NavSettingList';

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
        label: 'password',
        href: '/account/password',
        icon: <KeySquare className="w-4 h-4" />,
    },
];
const storeSettingMenu = [
    {
        label: 'store',
        href: '/account/store',
        icon: <Store className="w-4 h-4" />,
    },
    {
        label: 'product',
        href: '/account/store/product',
        icon: <Store className="w-4 h-4" />,
    },
    {
        label: 'category',
        href: '/account/store/product-category',
        icon: <Store className="w-4 h-4" />,
    },
];

export function NavSetting() {
    return (
        <>
            <NavSettingList label="account" menu={accountSettingMenu} />
            <NavSettingList label="store" menu={storeSettingMenu} />
        </>
    );
}
