import { Button } from '@/components/ui/button';
import WordRotate from '@/components/ui/word-rotate';
import { MoveRight } from 'lucide-react';

export const DiscountBanner = () => {
    return (
        <div className="flex flex-col justify-between items-center p-4 w-1/4 rounded-lg">
            <WordRotate
                className="text-4xl font-bold text-black dark:text-white w-full"
                words={[
                    'Order Now',
                    'Fast Delivery',
                    'Hot Deals',
                    'Fresh Meals',
                    'Tasty Food',
                ]}
            />
            <span className="text-center font-bold text-4xl">
                Black Nigga Flash <br /> Sale - 50% off <br /> SiteWide!
            </span>
            <Button className="px-10 py-2 rounded-3xl">
                {' '}
                Check Offers <MoveRight />{' '}
            </Button>
        </div>
    );
};
