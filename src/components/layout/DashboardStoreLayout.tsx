import { DashboardStoreHeader } from '../fragment/dashboard/store/DashboardStoreHeader';
import { Sidebar } from '../fragment/dashboard/store/sidebar/Sidebar';
import { Container } from './Container';
import { MainLayout } from './MainLayout';

type DashboardStoreLayoutProps = {
    children: React.ReactNode;
};

export const DashboardStoreLayout: React.FC<
    DashboardStoreLayoutProps
> = props => {
    const { children } = props;
    return (
        <MainLayout>
            <Container className="flex gap-2">
                <nav className="border-r border-zinc-200 pr-5">
                    <Sidebar />
                </nav>
                <main className="w-full px-5 pt-2 min-h-screen">
                    <DashboardStoreHeader />
                    {children}
                </main>
            </Container>
        </MainLayout>
    );
};
