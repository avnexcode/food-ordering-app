import { NavbarIcon } from './NavbarIcon';
import { NavbarMenu } from './NavbarMenu';
import { NavbarDropdownMenu } from './NavbarDropdownMenu';
import { CartButton } from '../../element/CartButton';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/layout/Container';
export const Navbar = () => {
    return (
        <nav className="py-2 sticky top-0 bg-white z-50 border-b border-zinc-200">
            <Container className="flex items-center justify-between">
                <div className="flex gap-4">
                    <NavbarIcon />
                    <NavbarMenu />
                </div>
                <div className="flex gap-4">
                    <CartButton />
                    <NavbarAuth />
                </div>
            </Container>
        </nav>
    );
};

const NavbarAuth = () => {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) return <NavbarDropdownMenu user={session.user} />;

    return (
        <Button
            size={'sm'}
            className="rounded-full"
            onClick={() => router.push('/auth/login')}
        >
            <LogIn />
            Sign In
        </Button>
    );
};
