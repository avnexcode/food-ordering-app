import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarLinkProps = {
    label: string;
    href: string;
};

export const NavbarLink = ({ label, href }: NavbarLinkProps) => {
    const pathName = usePathname();

    const isActive = pathName === href;

    return (
        <div
            className={`py-2 ${isActive ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-700 hover:text-green-500'}`}
        >
            <Link
                href={href}
                className={`flex text-md font-medium items-center justify-center px-8 py-2 rounded-sm transition-all duration-300 hover:bg-gray-100 capitalize`}
            >
                {label}
            </Link>
        </div>
    );
};
