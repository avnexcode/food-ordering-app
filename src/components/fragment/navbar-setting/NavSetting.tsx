import { NavSettingLink } from './NavSettingLink';
import { KeySquare, MapPin, Store, UserRound } from 'lucide-react';

export function NavSetting() {
    return (
        <div className='flex flex-col w-full min-w-[150px]'>
            <div className="flex flex-col gap-2 mt-4">
                <div className='flex items-center'>
                    <UserRound className='w-4 h-4' />
                    <NavSettingLink
                        href="/settings/profile"
                        label="profile"
                    />
                </div>
                <div className='flex items-center'>
                    <Store className='w-4 h-4' />
                    <NavSettingLink
                        href="/settings/store"
                        label="store"
                    />
                </div>
                <div className='flex items-center'>
                    <MapPin className='w-4 h-4' />
                    <NavSettingLink
                        href="/settings/address"
                        label="address"
                    />
                </div>
                <div className='flex items-center'>
                    <KeySquare className='w-4 h-4' />
                    <NavSettingLink
                        href="/settings/password"
                        label="password"
                    />
                </div>
            </div>
        </div>
    );
}
