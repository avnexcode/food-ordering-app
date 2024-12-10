import { Navbar } from './navbar/Navbar';

export const DashboardStoreHeader = () => {
    return (
        <header className="py-3 flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-semibold text-green-700">
                    Dashboard
                </h1>
                <span className="text-sm font-extralight">
                    Manage your store
                </span>
            </div>
            <Navbar />
        </header>
    );
};
