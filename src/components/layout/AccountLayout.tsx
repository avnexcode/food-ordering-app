import { Sidebar } from '../fragment/account/sidebar/Sidebar';
import { Container } from './Container';
import { MainLayout } from './MainLayout';

type SettingLayoutProps = {
    children: React.ReactNode;
};
export const AccountLayout: React.FC<SettingLayoutProps> = props => {
    const { children } = props;
    return (
        <MainLayout>
            <Container className="flex gap-2">
                <nav className="border-r border-zinc-200 pr-5">
                    <Sidebar />
                </nav>
                <main className="w-full px-5 pt-2 min-h-screen">
                    {children}
                </main>
            </Container>
        </MainLayout>
    );
};
