import { getDefaultFormValues } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthFormFooter } from "./AuthFormFooter"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { registerFormFields } from "../config/form"
import { useRegister } from "../api/useRegister"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { registerFormSchema, type RegisterFormSchema } from "@/features/auth/types"
import { RenderFormFields } from "@/utils/RenderFormInner"

export const RegisterForm = () => {
    const router = useRouter()
    const { toast } = useToast()

    const { mutate: register, isPending: signUpPending } = useRegister({
        onSettled: () => {
            toast({
                title: 'Success',
                description: 'Register Successfully'
            })
            router.push('/auth/login')
        },
        onError: (error) => {
            toast({
                title: 'Register Error',
                description: error || 'Invalid credentials',
                variant: 'destructive'
            })
        }
    })

    const onSubmit = (values: RegisterFormSchema) => register(values)

    const defaultValues = getDefaultFormValues(registerFormFields)

    const form = useForm<RegisterFormSchema>({
        defaultValues,
        resolver: zodResolver(registerFormSchema)
    })

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-3xl">Sign Up</CardTitle>
                <CardDescription>Create an account to get started.</CardDescription>
            </CardHeader>
            <CardContent>
                <RenderFormFields form_id="register-form" form={form} formFields={registerFormFields} onSubmit={onSubmit} />
            </CardContent>
            <CardFooter className="flex flex-col">
                <AuthFormFooter>
                    <Button form="register-form" disabled={signUpPending}>
                        {signUpPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Registering...</> : 'Register'}
                    </Button>
                </AuthFormFooter>
                <CardDescription>
                    Already have an account? <Link href={"/auth/login"} className="text-blue-500 underline">Sign In here</Link>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}