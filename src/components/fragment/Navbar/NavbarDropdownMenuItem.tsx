import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

type NavbarMenuItemProps = {
    menu: {
        label: string;
        url: string;
        icon: React.ReactElement;
    };
};

export const NavbarDropdownMenuItem = (props: NavbarMenuItemProps) => {
    const router = useRouter();

    return (
        <DropdownMenuItem
            onClick={() => router.push(props.menu.url)}
            className="capitalize"
        >
            {props.menu.icon}
            {props.menu.label}
        </DropdownMenuItem>
    );
};
