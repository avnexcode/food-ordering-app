import { GitHub } from "./button/GitHub"
import { Google } from "./button/Google"
import { Discord } from "./button/Discord"
import { Facebook } from "./button/Facebook"

export const AuthProviders = () => {
    return (
        <div>
            <div className="relative flex justify-center text-xs uppercase my-3">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
                <Google />
                {/* <Facebook /> */}
                <GitHub />
                {/* <Discord /> */}
            </div>
        </div>
    )
}