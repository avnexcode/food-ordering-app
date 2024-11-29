import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AuthFormFooter } from "./AuthFormFooter"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { getDefaultFormValues } from "@/utils"
import { Button } from "@/components/ui/button"
import { loginFormFields } from "../config/form"
import { loginFormSchema, type LoginFormSchema } from "../types"
import { useLogin } from "../api/useLogin"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { RenderFormFields } from "@/utils/RenderFormInner"

export const LoginForm = () => {
    const router = useRouter()
    const { toast } = useToast()

    const { mutate: login, isPending: signInPending } = useLogin({
        onSettled: () => {
            toast({
                title: 'Success',
                description: 'Login Successfully'
            })
            router.push('/')
        },
        onError: (error) => {
            toast({
                title: 'Login Error',
                description: error || 'Invalid credentials',
                variant: 'destructive'
            })
        }
    })

    const onSubmit = (values: LoginFormSchema) => login({ ...values, callbackUrl: '' })

    const defaultValues = getDefaultFormValues<LoginFormSchema>(loginFormFields)

    const form = useForm<LoginFormSchema>({
        defaultValues,
        resolver: zodResolver(loginFormSchema)
    })

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-3xl">Sign In</CardTitle>
                <CardDescription>Welcome back! please sign in to continue.</CardDescription>
            </CardHeader>

            <CardContent>
                <RenderFormFields form_id="login-form" form={form} formFields={loginFormFields} onSubmit={onSubmit} />
            </CardContent>

            <CardFooter className="flex flex-col">
                <AuthFormFooter>
                    <Button form="login-form" disabled={signInPending}>
                        {signInPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Logging...</> : 'Login'}
                    </Button>
                </AuthFormFooter>
                <CardDescription>
                    Don&apos;t have an account? <Link href={"/auth/register"} className="text-blue-500 underline">Sign Up here</Link>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}