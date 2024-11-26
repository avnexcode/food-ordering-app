import Link from "next/link"
export const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <Link href={'/'}>Navbar</Link>
            <div className="flex gap-2">
                <Link href={'/auth/login'}>Login</Link>
                <Link href={'/auth/register'}>Register</Link>
            </div>
        </nav>
    )
}
