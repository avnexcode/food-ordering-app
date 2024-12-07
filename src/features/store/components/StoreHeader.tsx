import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const StoreHeader = () => {
    return (
        <div className="flex justify-center items-center w-full border-2 border-gray-100 p-[10px]">
            <div className=" w-full flex gap-[10px] ">
                <div className="logo w-[30%] flex items-center justify-center">
                    <Avatar className="w-[150px] h-[150px]">
                        <AvatarImage
                            src="https://placehold.co/150x150"
                            alt={''}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="w-[70%] flex items-center justify-center">
                    <div>
                        <div className="text-xl font-bold ">
                            <h1>Toko bukan toko tapi yoga open BO</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
