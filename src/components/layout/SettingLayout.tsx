import { Navbar } from '../fragment/navbar/Navbar';
import { NavSetting } from '../fragment/navbar-setting/NavSetting';
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
                <nav className='border-r border-zinc-200'>
                    <NavSetting />
                </nav>
                <main className="w-full px-5 pt-2">{children}</main>
            </Container>
        </>
    );
};
