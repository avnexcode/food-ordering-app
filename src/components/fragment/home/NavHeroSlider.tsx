import { Button } from '@/components/ui/button';
import Marquee from '@/components/ui/marquee';

export const NavHeroSlider = () => {
    return (
        <div className="flex justify-evenly">
            <Marquee pauseOnHover className="[--duration:60s]">
                <Button className="px-10 py-2 rounded-3xl">Add to Cart</Button>
                <Button className="px-10 py-2 rounded-3xl">Buy Now</Button>
                <Button className="px-10 py-2 rounded-3xl">Checkout</Button>
                <Button className="px-10 py-2 rounded-3xl">View Details</Button>
                <Button className="px-10 py-2 rounded-3xl">
                    Add to Wishlist
                </Button>
                <Button className="px-10 py-2 rounded-3xl">Apply Coupon</Button>
                <Button className="px-10 py-2 rounded-3xl">Track Order</Button>
                <Button className="px-10 py-2 rounded-3xl">
                    Continue Shopping
                </Button>
                <Button className="px-10 py-2 rounded-3xl">Place Order</Button>
                <Button className="px-10 py-2 rounded-3xl">
                    Save for Later
                </Button>
            </Marquee>
        </div>
    );
};
