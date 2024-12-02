import { Container } from './Container';

type AuthLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const AuthLayout: React.FC<AuthLayoutProps> = props => {
    const { children, className } = props;
    return (
        <Container
            className={`flex min-h-screen items-center md:max-w-[700px] ${className}`}
        >
            {children}
        </Container>
    );
};
