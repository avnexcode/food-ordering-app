import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { AuthFormFooter } from '../form/AuthFormFooter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

type LoginFormLayoutProps = {
    children: React.ReactNode;
    isPending: boolean;
};

export const LoginFormLayout = (props: LoginFormLayoutProps) => {
    const { children, isPending } = props;

    return (
        <Card className="w-full border-none shadow-none">
            <CardHeader>
                <CardTitle>
                    <h3>Sign In</h3>
                </CardTitle>
                <CardDescription>
                    Welcome back! please sign in to continue.
                </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex flex-col">
                <AuthFormFooter>
                    <Button form="login-form" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Logging...
                            </>
                        ) : (
                            'Login'
                        )}
                    </Button>
                </AuthFormFooter>
                <CardDescription>
                    Don&apos;t have an account?{' '}
                    <Link
                        href={'/auth/register'}
                        className="text-blue-500 underline"
                    >
                        Sign Up here
                    </Link>
                </CardDescription>
            </CardFooter>
        </Card>
    );
};
