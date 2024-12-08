import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const CartButton = () => {
    const router = useRouter();
    return (
        <Button
            variant={'ghost'}
            onClick={() => router.push('/cart')}
            className="flex justify-center items-center gap-1 border px-5 py-1 rounded-full"
        >
            <ShoppingCart size={18} strokeWidth={2} />
            <span className="text-md">0</span>
        </Button>
    );
};
