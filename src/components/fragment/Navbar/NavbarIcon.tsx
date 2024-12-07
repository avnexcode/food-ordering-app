import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const NavbarIcon = () => {
    const router = useRouter();
    return (
        <h1 className="hover:cursor-pointer" onClick={() => router.push('/')}>
            <Image
                src={
                    'https://res.cloudinary.com/dkmlayydv/image/upload/c_crop,g_auto,h_800,w_800/c_crop,g_center,h_300,w_800/hexdvfhnp8nycd5yjs0z'
                }
                width={120}
                height={30}
                alt="icon"
            />
        </h1>
    );
};
