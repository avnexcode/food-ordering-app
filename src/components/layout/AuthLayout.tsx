import { Container } from "./Container"

type AuthLayoutProps = {
    children: React.ReactNode
    className?: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
    const { children, className } = props
    return (
        <Container className={`min-h-screen flex items-center ${className}`}>
            {children}
        </Container>
    )
}