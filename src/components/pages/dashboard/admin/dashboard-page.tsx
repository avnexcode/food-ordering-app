export const DashboardPage = () => {
    return (
        <>
            <h1 className="w-full p-5">Hello Dashboard</h1>
        </>
    );
};

DashboardPage.getLayout = (page: React.ReactElement) => <>{page}</>;
