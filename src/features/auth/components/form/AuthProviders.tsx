import { Google } from '../button/Google';

export const AuthProviders = () => {
    return (
        <div>
            <div className="relative flex justify-center text-xs uppercase my-3">
                <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                </span>
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
                <Google />
            </div>
        </div>
    );
};
