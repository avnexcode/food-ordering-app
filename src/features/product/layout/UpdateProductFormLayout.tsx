import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type UpdateProductFormLayoutProps = {
    children: React.ReactNode;
    isPending: boolean;
};

export const UpdateProductFormLayout = (
    props: UpdateProductFormLayoutProps,
) => {
    const { children, isPending } = props;
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>
                    <h4 className="text-green-700">Update Product</h4>
                </CardTitle>
                <CardDescription>Des</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="place-content-end gap-5">
                <Button
                    size={'sm'}
                    variant={'default'}
                    form="create-product-form"
                    disabled={isPending}
                >
                    {isPending ? 'Updating...' : 'Update'}
                </Button>
            </CardFooter>
        </Card>
    );
};
