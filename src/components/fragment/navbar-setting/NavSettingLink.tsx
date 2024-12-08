import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavSettingLink = {
    href: string;
    label: string;
};

export const NavSettingLink = (props: NavSettingLink) => {
    const pathName = usePathname();
    const isActive = pathName === props.href;
    return (
        <Link
            href={props.href}
            className={`text-lext py-2 pl-3 capitalize hover:underline ${isActive && 'italic text-gray-600'}`}
        >
            {props.label}
        </Link>
    );
};
