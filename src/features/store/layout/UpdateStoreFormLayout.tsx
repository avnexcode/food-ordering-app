import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type UpdateStoreFormLayoutProps = {
    children: React.ReactNode;
    isPending: boolean;
};

export const UpdateStoreFormLayout = (
    props: UpdateStoreFormLayoutProps
) => {
    const { children, isPending } = props;
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle className="text-2xl capitalize text-green-700">Update Store</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {children}
            </CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button form="update-store-setting">
                    {isPending ? 'Updating...' : 'Update'}
                </Button>
            </CardFooter>
        </Card>
    );
};
