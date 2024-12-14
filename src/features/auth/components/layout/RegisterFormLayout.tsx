import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { AuthFormFooter } from '../form/AuthFormFooter';

type RegisterFormLayoutProps = {
    children: React.ReactNode;
    isPending: boolean;
};
export const RegisterFormLayout = (props: RegisterFormLayoutProps) => {
    const { children, isPending } = props;
    return (
        <Card className="w-full border-none">
            <CardHeader>
                <CardTitle className="text-3xl">Sign Up</CardTitle>
                <CardDescription>
                    Create an account to get started.
                </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex flex-col">
                <AuthFormFooter>
                    <Button form="register-form" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Registering...
                            </>
                        ) : (
                            'Register'
                        )}
                    </Button>
                </AuthFormFooter>
                <CardDescription>
                    Already have an account?{' '}
                    <Link
                        href={'/auth/login'}
                        className="text-blue-500 underline"
                    >
                        Sign In here
                    </Link>
                </CardDescription>
            </CardFooter>
        </Card>
    );
};
