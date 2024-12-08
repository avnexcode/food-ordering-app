import { NavSettingLink } from './NavSettingLink';

type NavSettingListProps = {
    label: string;
    menu: {
        label: string;
        href: string;
        icon: React.ReactElement;
    }[];
};
export const NavSettingList = (props: NavSettingListProps) => {
    return (
        <div className="flex flex-col gap-2 mt-4 min-w-[150px]">
            <h1 className="capitalize">{props.label}</h1>
            {props.menu.map((menu, i) => {
                return (
                    <NavSettingLink
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
