import { AuthProviders } from './AuthProviders';

type AuthFormFooterProps = {
    children: React.ReactNode;
};

export const AuthFormFooter = (props: AuthFormFooterProps) => {
    const { children } = props;
    return (
        <div className="pb-5 w-full">
            <div className="flex justify-end w-full items-center">
                {children}
            </div>
            <div className="w-full">
                <AuthProviders />
            </div>
        </div>
    );
};
