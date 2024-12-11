import { NavbarLink } from './NavbarLink';

type NavbarListProps = {
    menus: {
        label: string;
        href: string;
    }[];
};

export const NavbarList = (props: NavbarListProps) => {
    return (
        <nav className="border-b border-zinc-200 flex gap-8">
            {props.menus.map((menu, index) => (
                <NavbarLink key={index} label={menu.label} href={menu.href} />
            ))}
        </nav>
    );
};
