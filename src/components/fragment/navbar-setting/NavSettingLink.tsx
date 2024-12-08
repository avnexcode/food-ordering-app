import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavSettingLink = {
    label: string;
    href: string;
    icon: React.ReactElement;
};

export const NavSettingLink = (props: NavSettingLink) => {
    const pathName = usePathname();
    const isActive = pathName === props.href;

    return (
        <div className="flex items-center">
            {props.icon}
            <Link
                href={props.href}
                className={`text-lext py-2 pl-3 capitalize hover:underline ${isActive && 'italic text-gray-600'}`}
            >
                {props.label}
            </Link>
        </div>
    );
};
