import { DashboardStoreLayout } from '@/components/layout/DashboardStoreLayout';

export const DashboardStoreOrderPage = () => {
    return <>Order</>;
};

DashboardStoreOrderPage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);
