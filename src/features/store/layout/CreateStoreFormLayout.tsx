import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type CreateStoreFormLayoutProps = {
    children: React.ReactNode;
    isPending: boolean;
};

export const CreateStoreFormLayout = (props: CreateStoreFormLayoutProps) => {
    const { children, isPending } = props;
    return (
        <Card className="border-none shadow-none">
            <CardHeader className="gap-y-5">
                <CardTitle>Create Store</CardTitle>
                <CardDescription>
                    Enter your store details to get started.
                </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button form="create-store-form" disabled={isPending}>
                    {isPending ? 'Creating...' : 'Create'}
                </Button>
            </CardFooter>
        </Card>
    );
};
