import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import * as React from 'react';

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
            'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
];

const products: { title: string; href: string; description: string }[] = [
    {
        title: 'React Framework',
        href: '/docs/react-framework',
        description:
            'A powerful and flexible framework for building user interfaces with React.',
    },
    {
        title: 'Vue.js',
        href: '/docs/vue-js',
        description:
            'An approachable, performant, and versatile framework for building modern web applications.',
    },
    {
        title: 'Tailwind CSS',
        href: '/docs/tailwind-css',
        description:
            'A utility-first CSS framework for creating custom designs without writing a lot of custom CSS.',
    },
    {
        title: 'Next.js',
        href: '/docs/next-js',
        description:
            'A React framework for building static and dynamic websites with server-side rendering and static site generation.',
    },
    {
        title: 'Node.js',
        href: '/docs/node-js',
        description:
            "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    },
];

export const NavbarMenuItem = () => {
    return (
        <>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {/* First Product Section with Gradient Background */}
                        <li className="row-span-3">
                            <NavigationMenuLink asChild>
                                <Link
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                >
                                    {/* Add an Icon or Logo if needed */}
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                        shadcn/ui
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Beautifully designed components that you can copy and
                                        paste into your apps. Accessible. Customizable. Open
                                        Source.
                                    </p>
                                </Link>
                            </NavigationMenuLink>
                        </li>

                        {/* List of Products */}
                        {products.map((product) => (
                            <ListItem
                                key={product.title}
                                title={product.title}
                                href={product.href}
                            >
                                {product.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                            <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                            >
                                {component.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </>
    );
};

// ListItem component without forwardRef
const ListItem = ({ className, title, children, href, ...props }: { className?: string; title: string; children: React.ReactNode; href: string }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
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

ListItem.displayName = 'ListItem';
