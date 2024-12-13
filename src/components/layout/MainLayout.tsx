import { Navbar } from '../fragment/navbar/Navbar';
import { Container } from './Container';

type MainLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = props => {
    const { children, className } = props;

    return (
        <main>
            <Navbar />
            <div className={`${className}`}>{children}</div>
        </main>
    );
};
