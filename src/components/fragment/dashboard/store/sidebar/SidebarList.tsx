import { SidebarLink } from './SidebarLink';

type SidebarListProps = {
    menu: {
        label: string;
        href: string;
        icon: React.ReactElement;
    }[];
};

export const SidebarList = (props: SidebarListProps) => {
    return (
        <div className="flex flex-col gap-2 mt-4 min-w-[150px]">
            {props.menu.map((menu, i) => {
                return (
                    <SidebarLink
                        key={i}
                        href={menu.href}
                        label={menu.label}
                        icon={menu.icon}
                    />
                );
            })}
        </div>
    );
};
