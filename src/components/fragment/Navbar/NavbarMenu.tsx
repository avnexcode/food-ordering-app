import { NavigationMenu } from '@/components/ui/navigation-menu';
import { NavbarMenuList } from './NavbarMenuList';

const categories: { title: string; href: string; description: string }[] = [
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

export const NavbarMenu = () => {
    return (
        <NavigationMenu>
            <NavbarMenuList label="product" menu={products} />
            <NavbarMenuList label="category" menu={categories} />
        </NavigationMenu>
    );
};
