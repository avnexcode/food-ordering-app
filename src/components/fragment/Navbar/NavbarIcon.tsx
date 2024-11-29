import { env } from '@/env';
import { useRouter } from 'next/navigation';

export const NavbarIcon = () => {
    const router = useRouter();
    return (
        <h1 className="hover:cursor-pointer" onClick={() => router.push('/')}>
            {env.NEXT_PUBLIC_APP_NAME}
        </h1>
    );
};
