import { TanstackProvider } from "./providers/TanstackProvider"
import { SessionProvider } from 'next-auth/react'

type AppProvidersProps = {
    children: React.ReactNode
}

export const AppProviders: React.FC<AppProvidersProps> = (props) => {
    const { children } = props
    return (
        <SessionProvider>
            <TanstackProvider>
                {children}
            </TanstackProvider>
        </SessionProvider>
    )
}