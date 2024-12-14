import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const StoreHeader = () => {
    return (
        <div className="flex justify-center items-center w-full border-2 border-gray-100 p-[10px]">
            <div className=" w-full flex gap-[10px] ">
                <div className="logo w-[10%] flex items-center justify-center">
                    <Avatar className="w-full h-full">
                        <AvatarImage
                            src="https://placehold.co/150x150"
                            alt={''}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="w-[70%] flex items-center justify-center">
                    <div>
                        <div className="text-xl font-semibold">
                            <span>Toko bukan toko tapi yoga open BO</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
