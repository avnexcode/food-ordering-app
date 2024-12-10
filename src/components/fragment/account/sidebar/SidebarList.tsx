import { SidebarLink } from './SidebarLink';

type SidebarListProps = {
    menus: {
        label: string;
        href: string;
        icon: React.ReactElement;
    }[];
};
export const SidebarList = (props: SidebarListProps) => {
    return (
        <div className="flex flex-col gap-2 mt-4 min-w-[150px]">
            {props.menus.map((menu, index) => {
                return (
                    <SidebarLink
                        key={index}
                        href={menu.href}
                        label={menu.label}
                        icon={menu.icon}
                    />
                );
            })}
        </div>
    );
};
