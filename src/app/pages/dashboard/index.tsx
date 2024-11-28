export const DashboardPage = () => {
    return (
        <><h1>Hello Dashboard</h1></>
    )
}

DashboardPage.getLayout = (page: React.ReactElement) => {
    return <>{page}</>
}