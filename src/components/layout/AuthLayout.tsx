import { NavbarIcon } from "@/components/fragment/navbar/NavbarIcon";
import { AuthLayoutHero } from "@/components/fragment/AuthLayoutHero";

type AuthLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const AuthLayout: React.FC<AuthLayoutProps> = props => {
    const { children, className } = props;
    return (
        <div className='flex min-h-screen w-full justify-between items-center relative'>
            <div className="absolute top-5 left-5 z-50">
                <NavbarIcon />
            </div>
            <div className='flex h-screen justify-center items-center w-[52%]'>
                <AuthLayoutHero />
            </div>
            <div className='flex justify-center items-center w-[48%]'>
                <div
                    className={`flex items-center w-2/3 justify-center ${className}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
