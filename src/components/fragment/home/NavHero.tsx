import { NavHeroSlider } from './NavHeroSlider';
import { NavHeroCarousel } from './NavHeroCarousel';

export const NavHero = () => {
    return (
        <div className="flex flex-col gap-10 shadow-md p-4">
            <div className="flex items-center">
                <div className="w-1/2">
                    <NavHeroCarousel />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <h1 className="text-5xl font-bold">
                        Hello! Yoga Berminyak
                    </h1>
                </div>
            </div>
            <NavHeroSlider />
        </div>
    );
};
