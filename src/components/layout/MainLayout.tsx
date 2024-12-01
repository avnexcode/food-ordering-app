import { Navbar } from '../fragment/Navbar/Navbar';

type MainLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = props => {
    const { children, className } = props;

    return (
        <main className={`${className}`}>
            <Navbar />
            {children}
        </main>
    );
};
