import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const StoreHeader = () => {
    return (
        <>
            <header className="relative">
                <div
                    className={`flex px-12 py-5 mb-2 justify-center gap-20 border-b-2 border-black`}
                >
                    <Avatar className="w-32 h-32">
                        <AvatarImage
                            src="https://placehold.co/400x400"
                            alt={''}
                        />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <span className="text-5xl font-bold uppercase">
                            Toko bukan toko tapi yoga open BO
                        </span>
                        <span className="italic">
                            disini yoga melayani dengan penuh semangat dan penuh
                            gairah
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
};
