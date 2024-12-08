import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import * as React from 'react';
import { cn } from '@/lib/utils';

type NavbarMenuItemProps = {
    className?: string;
    title: string;
    children: React.ReactNode;
    href: string;
};

export const NavbarMenuItem = (props: NavbarMenuItemProps) => {
    const { className, title, children, href } = props;

    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-green-50',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
};
