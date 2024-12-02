import { Navbar } from '../fragment/Navbar/Navbar';
import { NavSetting } from '../fragment/NavSetting/NavSetting';
import { Container } from './Container';

type SettingLayoutProps = {
    children: React.ReactNode;
};
export const SettingLayout: React.FC<SettingLayoutProps> = props => {
    const { children } = props;
    return (
        <>
            <Navbar />
            <Container className="pt-5 flex gap-2">
                <nav>
                    <NavSetting />
                </nav>
                <main className="w-full px-5 pt-2">{children}</main>
            </Container>
        </>
    );
};
