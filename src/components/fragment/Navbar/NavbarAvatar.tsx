import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getFirstLetter } from '@/utils';
import { type User } from 'next-auth';

type NavbarAvatarProps = {
    user: User;
};

export const NavbarAvatar = (props: NavbarAvatarProps) => {
    const username = props.user.name!;
    const userInitial = getFirstLetter(username.toLocaleUpperCase());
    return (
        <Avatar>
            <AvatarImage
                className="capitalize"
                src={props.user.image ?? ''}
                alt={props.user.name ?? ''}
                referrerPolicy="no-referrer"
            />
            <AvatarFallback>{userInitial}</AvatarFallback>
        </Avatar>
    );
};
