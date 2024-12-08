import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export const NavbarCartButton = () => {
    return (
        <div className="flex justify-center items-center mr-1">
            <Link href="/cart" className="flex justify-center items-center gap-1 border px-3 py-1 rounded-full">
                <ShoppingCart size={18} strokeWidth={1.75} />
                <span className="text-md">0</span>
            </Link>
        </div>
    )
}