import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type UpdateProductCategoryFormLayoutProps = {
    children: React.ReactNode;
    isPending: boolean;
};

export const UpdateProductCategoryFormLayout = (
    props: UpdateProductCategoryFormLayoutProps,
) => {
    const { children, isPending } = props;
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Update Category</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="place-content-end">
                <Button
                    size={'sm'}
                    variant={'default'}
                    form="update-product-category-form"
                    disabled={isPending}
                >
                    {isPending ? 'Updating...' : 'Update'}
                </Button>
            </CardFooter>
        </Card>
    );
};
