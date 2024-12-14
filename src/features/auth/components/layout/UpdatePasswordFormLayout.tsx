import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type UpdatePasswordFormLayoutProps = {
    children: React.ReactNode;
    isPending: boolean;
};

export const UpdatePasswordFormLayout = (
    props: UpdatePasswordFormLayoutProps,
) => {
    const { children, isPending } = props;
    return (
        <Card className="border-none shadow-none">
            <CardHeader className="gap-y-5">
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button form="update-user-password" disabled={isPending}>
                    {isPending ? 'Changing password...' : 'Change password'}
                </Button>
            </CardFooter>
        </Card>
    );
};
