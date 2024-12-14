import { Navbar } from './navbar/Navbar';

export const DashboardStoreHeader = () => {
    return (
        <header className="py-3 flex flex-col gap-8">
            <div>
                <h3 className="text-green-700">
                    Dashboard
                </h3>
                <span className="text-sm font-extralight">
                    Manage your store
                </span>
            </div>
            <Navbar />
        </header>
    );
};
