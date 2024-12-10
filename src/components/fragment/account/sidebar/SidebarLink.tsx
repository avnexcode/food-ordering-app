import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarLink = {
    label: string;
    href: string;
    icon: React.ReactElement;
};

export const SidebarLink = (props: SidebarLink) => {
    const pathName = usePathname();
    const isActive = pathName === props.href;

    const activeStyle = 'text-black bg-gray-100';
    const deactiveStyle = 'text-gray-500 hover:text-gray-900 hover:bg-gray-100';

    return (
        <Link
            href={props.href}
            className={`py-2 pl-3 capitalize flex items-center gap-3 px-5 rounded-lg transition-all duration-200 ease-in-out ${isActive ? activeStyle : deactiveStyle}`}
        >
            <span
                className={`text-lg ${isActive ? 'text-black' : 'text-gray-500'}`}
            >
                {props.icon}
            </span>
            <span>{props.label}</span>
        </Link>
    );
};
