import { NavbarIcon } from '@/components/fragment/navbar/NavbarIcon';
import { AuthHero } from '@/components/fragment/AuthHero';

type AuthLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const AuthLayout: React.FC<AuthLayoutProps> = props => {
    const { children, className } = props;
    return (
        <div
            className={`flex min-h-screen max-h-screen w-full relative ${className}`}
        >
            <div className="absolute top-5 left-5 z-50">
                <NavbarIcon />
            </div>
            <div className="w-3/4">
                <AuthHero />
            </div>
            <div className={`flex justify-center items-center w-full`}>
                <div className="min-w-[600px] w-1/2">{children}</div>
            </div>
        </div>
    );
};
