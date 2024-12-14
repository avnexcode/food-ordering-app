import { DashboardStoreLayout } from '@/components/layout/DashboardStoreLayout';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UpdateProductForm } from '@/features/product/components/form/UpdateProductForm';

export const DashboardStoreProductEditPage = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    return (
        <>
            <div className="container mx-auto px-4 py-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">Update Product</h1>
                    <p>Update product to your store</p>
                </div>

                <div>
                    <UpdateProductForm setIsPending={setIsPending} />
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-5">
                    <Button size={'sm'} variant={'default'}>
                        Cancel
                    </Button>
                    <Button
                        size={'sm'}
                        variant={'default'}
                        form="update-product-form"
                    >
                        {isPending ? 'Updating...' : 'Update'}
                    </Button>
                </div>
            </div>
        </>
    );
};

DashboardStoreProductEditPage.getLayout = (page: React.ReactElement) => (
    <DashboardStoreLayout>{page}</DashboardStoreLayout>
);
